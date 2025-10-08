var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.JointSpring' )
  var i2281 = data
  i2280.spring = i2281[0]
  i2280.damper = i2281[1]
  i2280.targetPosition = i2281[2]
  return i2280
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.JointMotor' )
  var i2283 = data
  i2282.m_TargetVelocity = i2283[0]
  i2282.m_Force = i2283[1]
  i2282.m_FreeSpin = i2283[2]
  return i2282
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.JointLimits' )
  var i2285 = data
  i2284.m_Min = i2285[0]
  i2284.m_Max = i2285[1]
  i2284.m_Bounciness = i2285[2]
  i2284.m_BounceMinVelocity = i2285[3]
  i2284.m_ContactDistance = i2285[4]
  i2284.minBounce = i2285[5]
  i2284.maxBounce = i2285[6]
  return i2284
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.JointDrive' )
  var i2287 = data
  i2286.m_PositionSpring = i2287[0]
  i2286.m_PositionDamper = i2287[1]
  i2286.m_MaximumForce = i2287[2]
  i2286.m_UseAcceleration = i2287[3]
  return i2286
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2289 = data
  i2288.m_Spring = i2289[0]
  i2288.m_Damper = i2289[1]
  return i2288
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2291 = data
  i2290.m_Limit = i2291[0]
  i2290.m_Bounciness = i2291[1]
  i2290.m_ContactDistance = i2291[2]
  return i2290
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2293 = data
  i2292.m_ExtremumSlip = i2293[0]
  i2292.m_ExtremumValue = i2293[1]
  i2292.m_AsymptoteSlip = i2293[2]
  i2292.m_AsymptoteValue = i2293[3]
  i2292.m_Stiffness = i2293[4]
  return i2292
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2295 = data
  i2294.m_LowerAngle = i2295[0]
  i2294.m_UpperAngle = i2295[1]
  return i2294
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2297 = data
  i2296.m_MotorSpeed = i2297[0]
  i2296.m_MaximumMotorTorque = i2297[1]
  return i2296
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2299 = data
  i2298.m_DampingRatio = i2299[0]
  i2298.m_Frequency = i2299[1]
  i2298.m_Angle = i2299[2]
  return i2298
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2301 = data
  i2300.m_LowerTranslation = i2301[0]
  i2300.m_UpperTranslation = i2301[1]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2303 = data
  i2302.name = i2303[0]
  i2302.width = i2303[1]
  i2302.height = i2303[2]
  i2302.mipmapCount = i2303[3]
  i2302.anisoLevel = i2303[4]
  i2302.filterMode = i2303[5]
  i2302.hdr = !!i2303[6]
  i2302.format = i2303[7]
  i2302.wrapMode = i2303[8]
  i2302.alphaIsTransparency = !!i2303[9]
  i2302.alphaSource = i2303[10]
  i2302.graphicsFormat = i2303[11]
  i2302.sRGBTexture = !!i2303[12]
  i2302.desiredColorSpace = i2303[13]
  i2302.wrapU = i2303[14]
  i2302.wrapV = i2303[15]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2305 = data
  i2304.pivot = new pc.Vec2( i2305[0], i2305[1] )
  i2304.anchorMin = new pc.Vec2( i2305[2], i2305[3] )
  i2304.anchorMax = new pc.Vec2( i2305[4], i2305[5] )
  i2304.sizeDelta = new pc.Vec2( i2305[6], i2305[7] )
  i2304.anchoredPosition3D = new pc.Vec3( i2305[8], i2305[9], i2305[10] )
  i2304.rotation = new pc.Quat(i2305[11], i2305[12], i2305[13], i2305[14])
  i2304.scale = new pc.Vec3( i2305[15], i2305[16], i2305[17] )
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2307 = data
  i2306.cullTransparentMesh = !!i2307[0]
  return i2306
}

Deserializers["Item"] = function (request, data, root) {
  var i2308 = root || request.c( 'Item' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'itemImage')
  request.r(i2309[2], i2309[3], 0, i2308, 'collectItemImage')
  request.r(i2309[4], i2309[5], 0, i2308, 'itemCountText')
  i2308.ItemCount = i2309[6]
  request.r(i2309[7], i2309[8], 0, i2308, 'completeSprite')
  request.r(i2309[9], i2309[10], 0, i2308, 'data')
  request.r(i2309[11], i2309[12], 0, i2308, 'UIMovement')
  request.r(i2309[13], i2309[14], 0, i2308, 'FurnitureImage')
  i2308.portraitLocation = new pc.Vec2( i2309[15], i2309[16] )
  i2308.landscapeLocation = new pc.Vec2( i2309[17], i2309[18] )
  return i2308
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.UI.Image' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'm_Sprite')
  i2310.m_Type = i2311[2]
  i2310.m_PreserveAspect = !!i2311[3]
  i2310.m_FillCenter = !!i2311[4]
  i2310.m_FillMethod = i2311[5]
  i2310.m_FillAmount = i2311[6]
  i2310.m_FillClockwise = !!i2311[7]
  i2310.m_FillOrigin = i2311[8]
  i2310.m_UseSpriteMesh = !!i2311[9]
  i2310.m_PixelsPerUnitMultiplier = i2311[10]
  request.r(i2311[11], i2311[12], 0, i2310, 'm_Material')
  i2310.m_Maskable = !!i2311[13]
  i2310.m_Color = new pc.Color(i2311[14], i2311[15], i2311[16], i2311[17])
  i2310.m_RaycastTarget = !!i2311[18]
  i2310.m_RaycastPadding = new pc.Vec4( i2311[19], i2311[20], i2311[21], i2311[22] )
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2313 = data
  i2312.name = i2313[0]
  i2312.tagId = i2313[1]
  i2312.enabled = !!i2313[2]
  i2312.isStatic = !!i2313[3]
  i2312.layer = i2313[4]
  return i2312
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2314 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2315 = data
  i2314.m_hasFontAssetChanged = !!i2315[0]
  request.r(i2315[1], i2315[2], 0, i2314, 'm_baseMaterial')
  i2314.m_maskOffset = new pc.Vec4( i2315[3], i2315[4], i2315[5], i2315[6] )
  i2314.m_text = i2315[7]
  i2314.m_isRightToLeft = !!i2315[8]
  request.r(i2315[9], i2315[10], 0, i2314, 'm_fontAsset')
  request.r(i2315[11], i2315[12], 0, i2314, 'm_sharedMaterial')
  var i2317 = i2315[13]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2314.m_fontSharedMaterials = i2316
  request.r(i2315[14], i2315[15], 0, i2314, 'm_fontMaterial')
  var i2319 = i2315[16]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 2) {
  request.r(i2319[i + 0], i2319[i + 1], 2, i2318, '')
  }
  i2314.m_fontMaterials = i2318
  i2314.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2315[17], i2315[18], i2315[19], i2315[20])
  i2314.m_fontColor = new pc.Color(i2315[21], i2315[22], i2315[23], i2315[24])
  i2314.m_enableVertexGradient = !!i2315[25]
  i2314.m_colorMode = i2315[26]
  i2314.m_fontColorGradient = request.d('TMPro.VertexGradient', i2315[27], i2314.m_fontColorGradient)
  request.r(i2315[28], i2315[29], 0, i2314, 'm_fontColorGradientPreset')
  request.r(i2315[30], i2315[31], 0, i2314, 'm_spriteAsset')
  i2314.m_tintAllSprites = !!i2315[32]
  request.r(i2315[33], i2315[34], 0, i2314, 'm_StyleSheet')
  i2314.m_TextStyleHashCode = i2315[35]
  i2314.m_overrideHtmlColors = !!i2315[36]
  i2314.m_faceColor = UnityEngine.Color32.ConstructColor(i2315[37], i2315[38], i2315[39], i2315[40])
  i2314.m_fontSize = i2315[41]
  i2314.m_fontSizeBase = i2315[42]
  i2314.m_fontWeight = i2315[43]
  i2314.m_enableAutoSizing = !!i2315[44]
  i2314.m_fontSizeMin = i2315[45]
  i2314.m_fontSizeMax = i2315[46]
  i2314.m_fontStyle = i2315[47]
  i2314.m_HorizontalAlignment = i2315[48]
  i2314.m_VerticalAlignment = i2315[49]
  i2314.m_textAlignment = i2315[50]
  i2314.m_characterSpacing = i2315[51]
  i2314.m_wordSpacing = i2315[52]
  i2314.m_lineSpacing = i2315[53]
  i2314.m_lineSpacingMax = i2315[54]
  i2314.m_paragraphSpacing = i2315[55]
  i2314.m_charWidthMaxAdj = i2315[56]
  i2314.m_enableWordWrapping = !!i2315[57]
  i2314.m_wordWrappingRatios = i2315[58]
  i2314.m_overflowMode = i2315[59]
  request.r(i2315[60], i2315[61], 0, i2314, 'm_linkedTextComponent')
  request.r(i2315[62], i2315[63], 0, i2314, 'parentLinkedComponent')
  i2314.m_enableKerning = !!i2315[64]
  i2314.m_enableExtraPadding = !!i2315[65]
  i2314.checkPaddingRequired = !!i2315[66]
  i2314.m_isRichText = !!i2315[67]
  i2314.m_parseCtrlCharacters = !!i2315[68]
  i2314.m_isOrthographic = !!i2315[69]
  i2314.m_isCullingEnabled = !!i2315[70]
  i2314.m_horizontalMapping = i2315[71]
  i2314.m_verticalMapping = i2315[72]
  i2314.m_uvLineOffset = i2315[73]
  i2314.m_geometrySortingOrder = i2315[74]
  i2314.m_IsTextObjectScaleStatic = !!i2315[75]
  i2314.m_VertexBufferAutoSizeReduction = !!i2315[76]
  i2314.m_useMaxVisibleDescender = !!i2315[77]
  i2314.m_pageToDisplay = i2315[78]
  i2314.m_margin = new pc.Vec4( i2315[79], i2315[80], i2315[81], i2315[82] )
  i2314.m_isUsingLegacyAnimationComponent = !!i2315[83]
  i2314.m_isVolumetricText = !!i2315[84]
  request.r(i2315[85], i2315[86], 0, i2314, 'm_Material')
  i2314.m_Maskable = !!i2315[87]
  i2314.m_Color = new pc.Color(i2315[88], i2315[89], i2315[90], i2315[91])
  i2314.m_RaycastTarget = !!i2315[92]
  i2314.m_RaycastPadding = new pc.Vec4( i2315[93], i2315[94], i2315[95], i2315[96] )
  return i2314
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2322 = root || request.c( 'TMPro.VertexGradient' )
  var i2323 = data
  i2322.topLeft = new pc.Color(i2323[0], i2323[1], i2323[2], i2323[3])
  i2322.topRight = new pc.Color(i2323[4], i2323[5], i2323[6], i2323[7])
  i2322.bottomLeft = new pc.Color(i2323[8], i2323[9], i2323[10], i2323[11])
  i2322.bottomRight = new pc.Color(i2323[12], i2323[13], i2323[14], i2323[15])
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2324 = root || new pc.UnityMaterial()
  var i2325 = data
  i2324.name = i2325[0]
  request.r(i2325[1], i2325[2], 0, i2324, 'shader')
  i2324.renderQueue = i2325[3]
  i2324.enableInstancing = !!i2325[4]
  var i2327 = i2325[5]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2327[i + 0]) );
  }
  i2324.floatParameters = i2326
  var i2329 = i2325[6]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2329[i + 0]) );
  }
  i2324.colorParameters = i2328
  var i2331 = i2325[7]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2331[i + 0]) );
  }
  i2324.vectorParameters = i2330
  var i2333 = i2325[8]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2333[i + 0]) );
  }
  i2324.textureParameters = i2332
  var i2335 = i2325[9]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2335[i + 0]) );
  }
  i2324.materialFlags = i2334
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2339 = data
  i2338.name = i2339[0]
  i2338.value = i2339[1]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2343 = data
  i2342.name = i2343[0]
  i2342.value = new pc.Color(i2343[1], i2343[2], i2343[3], i2343[4])
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2347 = data
  i2346.name = i2347[0]
  i2346.value = new pc.Vec4( i2347[1], i2347[2], i2347[3], i2347[4] )
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2351 = data
  i2350.name = i2351[0]
  request.r(i2351[1], i2351[2], 0, i2350, 'value')
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2355 = data
  i2354.name = i2355[0]
  i2354.enabled = !!i2355[1]
  return i2354
}

Deserializers["TileCell"] = function (request, data, root) {
  var i2356 = root || request.c( 'TileCell' )
  var i2357 = data
  i2356.coordinate = new pc.Vec2( i2357[0], i2357[1] )
  i2356.TileBreakEvent = request.d('UnityEngine.Events.UnityEvent', i2357[2], i2356.TileBreakEvent)
  request.r(i2357[3], i2357[4], 0, i2356, 'tileData')
  request.r(i2357[5], i2357[6], 0, i2356, 'tile')
  return i2356
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2359 = data
  i2358.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2359[0], i2358.m_PersistentCalls)
  return i2358
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2361 = data
  var i2363 = i2361[0]
  var i2362 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.add(request.d('UnityEngine.Events.PersistentCall', i2363[i + 0]));
  }
  i2360.m_Calls = i2362
  return i2360
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2366 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'm_Target')
  i2366.m_TargetAssemblyTypeName = i2367[2]
  i2366.m_MethodName = i2367[3]
  i2366.m_Mode = i2367[4]
  i2366.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2367[5], i2366.m_Arguments)
  i2366.m_CallState = i2367[6]
  return i2366
}

Deserializers["Tile"] = function (request, data, root) {
  var i2368 = root || request.c( 'Tile' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'itemImage')
  request.r(i2369[2], i2369[3], 0, i2368, 'tileData')
  i2368.MovementMagnitude = i2369[4]
  i2368.MovementDuration = i2369[5]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2371 = data
  i2370.position = new pc.Vec3( i2371[0], i2371[1], i2371[2] )
  i2370.scale = new pc.Vec3( i2371[3], i2371[4], i2371[5] )
  i2370.rotation = new pc.Quat(i2371[6], i2371[7], i2371[8], i2371[9])
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2373 = data
  i2372.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2373[0], i2372.main)
  i2372.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2373[1], i2372.colorBySpeed)
  i2372.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2373[2], i2372.colorOverLifetime)
  i2372.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2373[3], i2372.emission)
  i2372.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2373[4], i2372.rotationBySpeed)
  i2372.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2373[5], i2372.rotationOverLifetime)
  i2372.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2373[6], i2372.shape)
  i2372.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2373[7], i2372.sizeBySpeed)
  i2372.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2373[8], i2372.sizeOverLifetime)
  i2372.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2373[9], i2372.textureSheetAnimation)
  i2372.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2373[10], i2372.velocityOverLifetime)
  i2372.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2373[11], i2372.noise)
  i2372.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2373[12], i2372.inheritVelocity)
  i2372.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2373[13], i2372.forceOverLifetime)
  i2372.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2373[14], i2372.limitVelocityOverLifetime)
  i2372.useAutoRandomSeed = !!i2373[15]
  i2372.randomSeed = i2373[16]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2374 = root || new pc.ParticleSystemMain()
  var i2375 = data
  i2374.duration = i2375[0]
  i2374.loop = !!i2375[1]
  i2374.prewarm = !!i2375[2]
  i2374.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[3], i2374.startDelay)
  i2374.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[4], i2374.startLifetime)
  i2374.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[5], i2374.startSpeed)
  i2374.startSize3D = !!i2375[6]
  i2374.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[7], i2374.startSizeX)
  i2374.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[8], i2374.startSizeY)
  i2374.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[9], i2374.startSizeZ)
  i2374.startRotation3D = !!i2375[10]
  i2374.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[11], i2374.startRotationX)
  i2374.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[12], i2374.startRotationY)
  i2374.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[13], i2374.startRotationZ)
  i2374.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2375[14], i2374.startColor)
  i2374.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[15], i2374.gravityModifier)
  i2374.simulationSpace = i2375[16]
  request.r(i2375[17], i2375[18], 0, i2374, 'customSimulationSpace')
  i2374.simulationSpeed = i2375[19]
  i2374.useUnscaledTime = !!i2375[20]
  i2374.scalingMode = i2375[21]
  i2374.playOnAwake = !!i2375[22]
  i2374.maxParticles = i2375[23]
  i2374.emitterVelocityMode = i2375[24]
  i2374.stopAction = i2375[25]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2376 = root || new pc.MinMaxCurve()
  var i2377 = data
  i2376.mode = i2377[0]
  i2376.curveMin = new pc.AnimationCurve( { keys_flow: i2377[1] } )
  i2376.curveMax = new pc.AnimationCurve( { keys_flow: i2377[2] } )
  i2376.curveMultiplier = i2377[3]
  i2376.constantMin = i2377[4]
  i2376.constantMax = i2377[5]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2378 = root || new pc.MinMaxGradient()
  var i2379 = data
  i2378.mode = i2379[0]
  i2378.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2379[1], i2378.gradientMin)
  i2378.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2379[2], i2378.gradientMax)
  i2378.colorMin = new pc.Color(i2379[3], i2379[4], i2379[5], i2379[6])
  i2378.colorMax = new pc.Color(i2379[7], i2379[8], i2379[9], i2379[10])
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2381 = data
  i2380.mode = i2381[0]
  var i2383 = i2381[1]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2383[i + 0]) );
  }
  i2380.colorKeys = i2382
  var i2385 = i2381[2]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2385[i + 0]) );
  }
  i2380.alphaKeys = i2384
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2386 = root || new pc.ParticleSystemColorBySpeed()
  var i2387 = data
  i2386.enabled = !!i2387[0]
  i2386.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2387[1], i2386.color)
  i2386.range = new pc.Vec2( i2387[2], i2387[3] )
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2391 = data
  i2390.color = new pc.Color(i2391[0], i2391[1], i2391[2], i2391[3])
  i2390.time = i2391[4]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2395 = data
  i2394.alpha = i2395[0]
  i2394.time = i2395[1]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2396 = root || new pc.ParticleSystemColorOverLifetime()
  var i2397 = data
  i2396.enabled = !!i2397[0]
  i2396.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2397[1], i2396.color)
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2398 = root || new pc.ParticleSystemEmitter()
  var i2399 = data
  i2398.enabled = !!i2399[0]
  i2398.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[1], i2398.rateOverTime)
  i2398.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[2], i2398.rateOverDistance)
  var i2401 = i2399[3]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2401[i + 0]) );
  }
  i2398.bursts = i2400
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2404 = root || new pc.ParticleSystemBurst()
  var i2405 = data
  i2404.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[0], i2404.count)
  i2404.cycleCount = i2405[1]
  i2404.minCount = i2405[2]
  i2404.maxCount = i2405[3]
  i2404.repeatInterval = i2405[4]
  i2404.time = i2405[5]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2406 = root || new pc.ParticleSystemRotationBySpeed()
  var i2407 = data
  i2406.enabled = !!i2407[0]
  i2406.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[1], i2406.x)
  i2406.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[2], i2406.y)
  i2406.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[3], i2406.z)
  i2406.separateAxes = !!i2407[4]
  i2406.range = new pc.Vec2( i2407[5], i2407[6] )
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2408 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2409 = data
  i2408.enabled = !!i2409[0]
  i2408.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[1], i2408.x)
  i2408.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[2], i2408.y)
  i2408.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[3], i2408.z)
  i2408.separateAxes = !!i2409[4]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2410 = root || new pc.ParticleSystemShape()
  var i2411 = data
  i2410.enabled = !!i2411[0]
  i2410.shapeType = i2411[1]
  i2410.randomDirectionAmount = i2411[2]
  i2410.sphericalDirectionAmount = i2411[3]
  i2410.randomPositionAmount = i2411[4]
  i2410.alignToDirection = !!i2411[5]
  i2410.radius = i2411[6]
  i2410.radiusMode = i2411[7]
  i2410.radiusSpread = i2411[8]
  i2410.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[9], i2410.radiusSpeed)
  i2410.radiusThickness = i2411[10]
  i2410.angle = i2411[11]
  i2410.length = i2411[12]
  i2410.boxThickness = new pc.Vec3( i2411[13], i2411[14], i2411[15] )
  i2410.meshShapeType = i2411[16]
  request.r(i2411[17], i2411[18], 0, i2410, 'mesh')
  request.r(i2411[19], i2411[20], 0, i2410, 'meshRenderer')
  request.r(i2411[21], i2411[22], 0, i2410, 'skinnedMeshRenderer')
  i2410.useMeshMaterialIndex = !!i2411[23]
  i2410.meshMaterialIndex = i2411[24]
  i2410.useMeshColors = !!i2411[25]
  i2410.normalOffset = i2411[26]
  i2410.arc = i2411[27]
  i2410.arcMode = i2411[28]
  i2410.arcSpread = i2411[29]
  i2410.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[30], i2410.arcSpeed)
  i2410.donutRadius = i2411[31]
  i2410.position = new pc.Vec3( i2411[32], i2411[33], i2411[34] )
  i2410.rotation = new pc.Vec3( i2411[35], i2411[36], i2411[37] )
  i2410.scale = new pc.Vec3( i2411[38], i2411[39], i2411[40] )
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2412 = root || new pc.ParticleSystemSizeBySpeed()
  var i2413 = data
  i2412.enabled = !!i2413[0]
  i2412.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[1], i2412.x)
  i2412.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[2], i2412.y)
  i2412.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[3], i2412.z)
  i2412.separateAxes = !!i2413[4]
  i2412.range = new pc.Vec2( i2413[5], i2413[6] )
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2414 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2415 = data
  i2414.enabled = !!i2415[0]
  i2414.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[1], i2414.x)
  i2414.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[2], i2414.y)
  i2414.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[3], i2414.z)
  i2414.separateAxes = !!i2415[4]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2416 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2417 = data
  i2416.enabled = !!i2417[0]
  i2416.mode = i2417[1]
  i2416.animation = i2417[2]
  i2416.numTilesX = i2417[3]
  i2416.numTilesY = i2417[4]
  i2416.useRandomRow = !!i2417[5]
  i2416.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2417[6], i2416.frameOverTime)
  i2416.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2417[7], i2416.startFrame)
  i2416.cycleCount = i2417[8]
  i2416.rowIndex = i2417[9]
  i2416.flipU = i2417[10]
  i2416.flipV = i2417[11]
  i2416.spriteCount = i2417[12]
  var i2419 = i2417[13]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 2) {
  request.r(i2419[i + 0], i2419[i + 1], 2, i2418, '')
  }
  i2416.sprites = i2418
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2422 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2423 = data
  i2422.enabled = !!i2423[0]
  i2422.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[1], i2422.x)
  i2422.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[2], i2422.y)
  i2422.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[3], i2422.z)
  i2422.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[4], i2422.radial)
  i2422.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[5], i2422.speedModifier)
  i2422.space = i2423[6]
  i2422.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[7], i2422.orbitalX)
  i2422.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[8], i2422.orbitalY)
  i2422.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[9], i2422.orbitalZ)
  i2422.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[10], i2422.orbitalOffsetX)
  i2422.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[11], i2422.orbitalOffsetY)
  i2422.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[12], i2422.orbitalOffsetZ)
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2424 = root || new pc.ParticleSystemNoise()
  var i2425 = data
  i2424.enabled = !!i2425[0]
  i2424.separateAxes = !!i2425[1]
  i2424.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[2], i2424.strengthX)
  i2424.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[3], i2424.strengthY)
  i2424.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[4], i2424.strengthZ)
  i2424.frequency = i2425[5]
  i2424.damping = !!i2425[6]
  i2424.octaveCount = i2425[7]
  i2424.octaveMultiplier = i2425[8]
  i2424.octaveScale = i2425[9]
  i2424.quality = i2425[10]
  i2424.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[11], i2424.scrollSpeed)
  i2424.scrollSpeedMultiplier = i2425[12]
  i2424.remapEnabled = !!i2425[13]
  i2424.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[14], i2424.remapX)
  i2424.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[15], i2424.remapY)
  i2424.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[16], i2424.remapZ)
  i2424.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[17], i2424.positionAmount)
  i2424.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[18], i2424.rotationAmount)
  i2424.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[19], i2424.sizeAmount)
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2426 = root || new pc.ParticleSystemInheritVelocity()
  var i2427 = data
  i2426.enabled = !!i2427[0]
  i2426.mode = i2427[1]
  i2426.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[2], i2426.curve)
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2428 = root || new pc.ParticleSystemForceOverLifetime()
  var i2429 = data
  i2428.enabled = !!i2429[0]
  i2428.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[1], i2428.x)
  i2428.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[2], i2428.y)
  i2428.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[3], i2428.z)
  i2428.space = i2429[4]
  i2428.randomized = !!i2429[5]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2430 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2431 = data
  i2430.enabled = !!i2431[0]
  i2430.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[1], i2430.limit)
  i2430.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[2], i2430.limitX)
  i2430.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[3], i2430.limitY)
  i2430.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[4], i2430.limitZ)
  i2430.dampen = i2431[5]
  i2430.separateAxes = !!i2431[6]
  i2430.space = i2431[7]
  i2430.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[8], i2430.drag)
  i2430.multiplyDragByParticleSize = !!i2431[9]
  i2430.multiplyDragByParticleVelocity = !!i2431[10]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2433 = data
  i2432.enabled = !!i2433[0]
  request.r(i2433[1], i2433[2], 0, i2432, 'sharedMaterial')
  var i2435 = i2433[3]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 2) {
  request.r(i2435[i + 0], i2435[i + 1], 2, i2434, '')
  }
  i2432.sharedMaterials = i2434
  i2432.receiveShadows = !!i2433[4]
  i2432.shadowCastingMode = i2433[5]
  i2432.sortingLayerID = i2433[6]
  i2432.sortingOrder = i2433[7]
  i2432.lightmapIndex = i2433[8]
  i2432.lightmapSceneIndex = i2433[9]
  i2432.lightmapScaleOffset = new pc.Vec4( i2433[10], i2433[11], i2433[12], i2433[13] )
  i2432.lightProbeUsage = i2433[14]
  i2432.reflectionProbeUsage = i2433[15]
  request.r(i2433[16], i2433[17], 0, i2432, 'mesh')
  i2432.meshCount = i2433[18]
  i2432.activeVertexStreamsCount = i2433[19]
  i2432.alignment = i2433[20]
  i2432.renderMode = i2433[21]
  i2432.sortMode = i2433[22]
  i2432.lengthScale = i2433[23]
  i2432.velocityScale = i2433[24]
  i2432.cameraVelocityScale = i2433[25]
  i2432.normalDirection = i2433[26]
  i2432.sortingFudge = i2433[27]
  i2432.minParticleSize = i2433[28]
  i2432.maxParticleSize = i2433[29]
  i2432.pivot = new pc.Vec3( i2433[30], i2433[31], i2433[32] )
  request.r(i2433[33], i2433[34], 0, i2432, 'trailMaterial')
  return i2432
}

Deserializers["CartoonFX.CFXR_Effect"] = function (request, data, root) {
  var i2436 = root || request.c( 'CartoonFX.CFXR_Effect' )
  var i2437 = data
  i2436.clearBehavior = i2437[0]
  i2436.cameraShake = request.d('CartoonFX.CFXR_Effect+CameraShake', i2437[1], i2436.cameraShake)
  var i2439 = i2437[2]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('CartoonFX.CFXR_Effect+AnimatedLight', i2439[i + 0]) );
  }
  i2436.animatedLights = i2438
  request.r(i2437[3], i2437[4], 0, i2436, 'fadeOutReference')
  return i2436
}

Deserializers["CartoonFX.CFXR_Effect+CameraShake"] = function (request, data, root) {
  var i2440 = root || request.c( 'CartoonFX.CFXR_Effect+CameraShake' )
  var i2441 = data
  i2440.camEnabled = !!i2441[0]
  i2440.useMainCamera = !!i2441[1]
  var i2443 = i2441[2]
  var i2442 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2443.length; i += 2) {
  request.r(i2443[i + 0], i2443[i + 1], 1, i2442, '')
  }
  i2440.cameras = i2442
  i2440.delay = i2441[3]
  i2440.duration = i2441[4]
  i2440.shakeSpace = i2441[5]
  i2440.shakeStrength = new pc.Vec3( i2441[6], i2441[7], i2441[8] )
  i2440.shakeCurve = new pc.AnimationCurve( { keys_flow: i2441[9] } )
  i2440.shakesDelay = i2441[10]
  return i2440
}

Deserializers["CartoonFX.CFXR_Effect+AnimatedLight"] = function (request, data, root) {
  var i2448 = root || request.c( 'CartoonFX.CFXR_Effect+AnimatedLight' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'light')
  i2448.loop = !!i2449[2]
  i2448.animateIntensity = !!i2449[3]
  i2448.intensityStart = i2449[4]
  i2448.intensityEnd = i2449[5]
  i2448.intensityDuration = i2449[6]
  i2448.intensityCurve = new pc.AnimationCurve( { keys_flow: i2449[7] } )
  i2448.perlinIntensity = !!i2449[8]
  i2448.perlinIntensitySpeed = i2449[9]
  i2448.fadeIn = !!i2449[10]
  i2448.fadeInDuration = i2449[11]
  i2448.fadeOut = !!i2449[12]
  i2448.fadeOutDuration = i2449[13]
  i2448.animateRange = !!i2449[14]
  i2448.rangeStart = i2449[15]
  i2448.rangeEnd = i2449[16]
  i2448.rangeDuration = i2449[17]
  i2448.rangeCurve = new pc.AnimationCurve( { keys_flow: i2449[18] } )
  i2448.perlinRange = !!i2449[19]
  i2448.perlinRangeSpeed = i2449[20]
  i2448.animateColor = !!i2449[21]
  i2448.colorGradient = i2449[22] ? new pc.ColorGradient(i2449[22][0], i2449[22][1], i2449[22][2]) : null
  i2448.colorDuration = i2449[23]
  i2448.colorCurve = new pc.AnimationCurve( { keys_flow: i2449[24] } )
  i2448.perlinColor = !!i2449[25]
  i2448.perlinColorSpeed = i2449[26]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2451 = data
  i2450.enabled = !!i2451[0]
  i2450.type = i2451[1]
  i2450.color = new pc.Color(i2451[2], i2451[3], i2451[4], i2451[5])
  i2450.cullingMask = i2451[6]
  i2450.intensity = i2451[7]
  i2450.range = i2451[8]
  i2450.spotAngle = i2451[9]
  i2450.shadows = i2451[10]
  i2450.shadowNormalBias = i2451[11]
  i2450.shadowBias = i2451[12]
  i2450.shadowStrength = i2451[13]
  i2450.shadowResolution = i2451[14]
  i2450.lightmapBakeType = i2451[15]
  i2450.renderMode = i2451[16]
  request.r(i2451[17], i2451[18], 0, i2450, 'cookie')
  i2450.cookieSize = i2451[19]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2453 = data
  i2452.name = i2453[0]
  i2452.halfPrecision = !!i2453[1]
  i2452.useUInt32IndexFormat = !!i2453[2]
  i2452.vertexCount = i2453[3]
  i2452.aabb = i2453[4]
  var i2455 = i2453[5]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( !!i2455[i + 0] );
  }
  i2452.streams = i2454
  i2452.vertices = i2453[6]
  var i2457 = i2453[7]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2457[i + 0]) );
  }
  i2452.subMeshes = i2456
  var i2459 = i2453[8]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 16) {
    i2458.push( new pc.Mat4().setData(i2459[i + 0], i2459[i + 1], i2459[i + 2], i2459[i + 3],  i2459[i + 4], i2459[i + 5], i2459[i + 6], i2459[i + 7],  i2459[i + 8], i2459[i + 9], i2459[i + 10], i2459[i + 11],  i2459[i + 12], i2459[i + 13], i2459[i + 14], i2459[i + 15]) );
  }
  i2452.bindposes = i2458
  var i2461 = i2453[9]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2461[i + 0]) );
  }
  i2452.blendShapes = i2460
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2467 = data
  i2466.triangles = i2467[0]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2473 = data
  i2472.name = i2473[0]
  var i2475 = i2473[1]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2475[i + 0]) );
  }
  i2472.frames = i2474
  return i2472
}

Deserializers["AnimatedTile"] = function (request, data, root) {
  var i2476 = root || request.c( 'AnimatedTile' )
  var i2477 = data
  i2476.Duration = i2477[0]
  request.r(i2477[1], i2477[2], 0, i2476, 'tileData')
  var i2479 = i2477[3]
  var i2478 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2479.length; i += 3) {
    i2478.add(new pc.Vec3( i2479[i + 0], i2479[i + 1], i2479[i + 2] ));
  }
  i2476.targetPos = i2478
  var i2481 = i2477[4]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2481.length; i += 3) {
    i2480.add(new pc.Vec3( i2481[i + 0], i2481[i + 1], i2481[i + 2] ));
  }
  i2476.targetPosPortrait = i2480
  var i2483 = i2477[5]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2483.length; i += 3) {
    i2482.add(new pc.Vec3( i2483[i + 0], i2483[i + 1], i2483[i + 2] ));
  }
  i2476.targetPosLandscape = i2482
  var i2485 = i2477[6]
  var i2484 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.add(i2485[i + 0]);
  }
  i2476.targets = i2484
  request.r(i2477[7], i2477[8], 0, i2476, 'image')
  var i2487 = i2477[9]
  var i2486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 1, i2486, '')
  }
  i2476.vfxParticles = i2486
  request.r(i2477[10], i2477[11], 0, i2476, 'trailVFXPrefab')
  request.r(i2477[12], i2477[13], 0, i2476, 'circleTrailVFXPrefab')
  request.r(i2477[14], i2477[15], 0, i2476, 'trailRenderer')
  return i2476
}

Deserializers["StateEvents"] = function (request, data, root) {
  var i2494 = root || request.c( 'StateEvents' )
  var i2495 = data
  i2494.OnEnableEvent = request.d('UnityEngine.Events.UnityEvent', i2495[0], i2494.OnEnableEvent)
  i2494.OnDisableEvent = request.d('UnityEngine.Events.UnityEvent', i2495[1], i2494.OnDisableEvent)
  i2494.OnStartEvent = request.d('UnityEngine.Events.UnityEvent', i2495[2], i2494.OnStartEvent)
  i2494.autoEnable = !!i2495[3]
  i2494.autoEnableDelay = i2495[4]
  i2494.autoDisableDelay = i2495[5]
  return i2494
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2497 = data
  request.r(i2497[0], i2497[1], 0, i2496, 'm_ObjectArgument')
  i2496.m_ObjectArgumentAssemblyTypeName = i2497[2]
  i2496.m_IntArgument = i2497[3]
  i2496.m_FloatArgument = i2497[4]
  i2496.m_StringArgument = i2497[5]
  i2496.m_BoolArgument = !!i2497[6]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2499 = data
  i2498.enabled = !!i2499[0]
  request.r(i2499[1], i2499[2], 0, i2498, 'sharedMaterial')
  var i2501 = i2499[3]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 2) {
  request.r(i2501[i + 0], i2501[i + 1], 2, i2500, '')
  }
  i2498.sharedMaterials = i2500
  i2498.receiveShadows = !!i2499[4]
  i2498.shadowCastingMode = i2499[5]
  i2498.sortingLayerID = i2499[6]
  i2498.sortingOrder = i2499[7]
  i2498.lightmapIndex = i2499[8]
  i2498.lightmapSceneIndex = i2499[9]
  i2498.lightmapScaleOffset = new pc.Vec4( i2499[10], i2499[11], i2499[12], i2499[13] )
  i2498.lightProbeUsage = i2499[14]
  i2498.reflectionProbeUsage = i2499[15]
  var i2503 = i2499[16]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 3) {
    i2502.push( new pc.Vec3( i2503[i + 0], i2503[i + 1], i2503[i + 2] ) );
  }
  i2498.positions = i2502
  i2498.positionCount = i2499[17]
  i2498.time = i2499[18]
  i2498.startWidth = i2499[19]
  i2498.endWidth = i2499[20]
  i2498.widthMultiplier = i2499[21]
  i2498.autodestruct = !!i2499[22]
  i2498.emitting = !!i2499[23]
  i2498.numCornerVertices = i2499[24]
  i2498.numCapVertices = i2499[25]
  i2498.minVertexDistance = i2499[26]
  i2498.colorGradient = i2499[27] ? new pc.ColorGradient(i2499[27][0], i2499[27][1], i2499[27][2]) : null
  i2498.startColor = new pc.Color(i2499[28], i2499[29], i2499[30], i2499[31])
  i2498.endColor = new pc.Color(i2499[32], i2499[33], i2499[34], i2499[35])
  i2498.generateLightingData = !!i2499[36]
  i2498.textureMode = i2499[37]
  i2498.alignment = i2499[38]
  i2498.widthCurve = new pc.AnimationCurve( { keys_flow: i2499[39] } )
  return i2498
}

Deserializers["PositionTracking"] = function (request, data, root) {
  var i2506 = root || request.c( 'PositionTracking' )
  var i2507 = data
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2509 = data
  i2508.name = i2509[0]
  i2508.index = i2509[1]
  i2508.startup = !!i2509[2]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2511 = data
  i2510.enabled = !!i2511[0]
  i2510.aspect = i2511[1]
  i2510.orthographic = !!i2511[2]
  i2510.orthographicSize = i2511[3]
  i2510.backgroundColor = new pc.Color(i2511[4], i2511[5], i2511[6], i2511[7])
  i2510.nearClipPlane = i2511[8]
  i2510.farClipPlane = i2511[9]
  i2510.fieldOfView = i2511[10]
  i2510.depth = i2511[11]
  i2510.clearFlags = i2511[12]
  i2510.cullingMask = i2511[13]
  i2510.rect = i2511[14]
  request.r(i2511[15], i2511[16], 0, i2510, 'targetTexture')
  i2510.usePhysicalProperties = !!i2511[17]
  i2510.focalLength = i2511[18]
  i2510.sensorSize = new pc.Vec2( i2511[19], i2511[20] )
  i2510.lensShift = new pc.Vec2( i2511[21], i2511[22] )
  i2510.gateFit = i2511[23]
  i2510.commandBufferCount = i2511[24]
  i2510.cameraType = i2511[25]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2513 = data
  i2512.enabled = !!i2513[0]
  i2512.planeDistance = i2513[1]
  i2512.referencePixelsPerUnit = i2513[2]
  i2512.isFallbackOverlay = !!i2513[3]
  i2512.renderMode = i2513[4]
  i2512.renderOrder = i2513[5]
  i2512.sortingLayerName = i2513[6]
  i2512.sortingOrder = i2513[7]
  i2512.scaleFactor = i2513[8]
  request.r(i2513[9], i2513[10], 0, i2512, 'worldCamera')
  i2512.overrideSorting = !!i2513[11]
  i2512.pixelPerfect = !!i2513[12]
  i2512.targetDisplay = i2513[13]
  i2512.overridePixelPerfect = !!i2513[14]
  return i2512
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2515 = data
  i2514.m_UiScaleMode = i2515[0]
  i2514.m_ReferencePixelsPerUnit = i2515[1]
  i2514.m_ScaleFactor = i2515[2]
  i2514.m_ReferenceResolution = new pc.Vec2( i2515[3], i2515[4] )
  i2514.m_ScreenMatchMode = i2515[5]
  i2514.m_MatchWidthOrHeight = i2515[6]
  i2514.m_PhysicalUnit = i2515[7]
  i2514.m_FallbackScreenDPI = i2515[8]
  i2514.m_DefaultSpriteDPI = i2515[9]
  i2514.m_DynamicPixelsPerUnit = i2515[10]
  i2514.m_PresetInfoIsWorld = !!i2515[11]
  return i2514
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2517 = data
  i2516.m_IgnoreReversedGraphics = !!i2517[0]
  i2516.m_BlockingObjects = i2517[1]
  i2516.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2517[2] )
  return i2516
}

Deserializers["BasicFade"] = function (request, data, root) {
  var i2518 = root || request.c( 'BasicFade' )
  var i2519 = data
  request.r(i2519[0], i2519[1], 0, i2518, 'canvasGroup')
  i2518.duration = i2519[2]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2521 = data
  i2520.m_Alpha = i2521[0]
  i2520.m_Interactable = !!i2521[1]
  i2520.m_BlocksRaycasts = !!i2521[2]
  i2520.m_IgnoreParentGroups = !!i2521[3]
  i2520.enabled = !!i2521[4]
  return i2520
}

Deserializers["AppearAnimation"] = function (request, data, root) {
  var i2522 = root || request.c( 'AppearAnimation' )
  var i2523 = data
  i2522.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i2523[0], i2522.OnMovementComplete)
  i2522.fadeInDuration = i2523[1]
  i2522.fadeInDelay = i2523[2]
  i2522.fillDuration = i2523[3]
  i2522.fillDelay = i2523[4]
  i2522.targetFillAmount = i2523[5]
  i2522.initialFillAmount = i2523[6]
  return i2522
}

Deserializers["PlayerGuide"] = function (request, data, root) {
  var i2524 = root || request.c( 'PlayerGuide' )
  var i2525 = data
  var i2527 = i2525[0]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 1, i2526, '')
  }
  i2524.prompts = i2526
  return i2524
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2530 = root || request.c( 'UnityEngine.UI.Button' )
  var i2531 = data
  i2530.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2531[0], i2530.m_OnClick)
  i2530.m_Navigation = request.d('UnityEngine.UI.Navigation', i2531[1], i2530.m_Navigation)
  i2530.m_Transition = i2531[2]
  i2530.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2531[3], i2530.m_Colors)
  i2530.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2531[4], i2530.m_SpriteState)
  i2530.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2531[5], i2530.m_AnimationTriggers)
  i2530.m_Interactable = !!i2531[6]
  request.r(i2531[7], i2531[8], 0, i2530, 'm_TargetGraphic')
  return i2530
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2532 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2533 = data
  i2532.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2533[0], i2532.m_PersistentCalls)
  return i2532
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2534 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2535 = data
  i2534.m_Mode = i2535[0]
  i2534.m_WrapAround = !!i2535[1]
  request.r(i2535[2], i2535[3], 0, i2534, 'm_SelectOnUp')
  request.r(i2535[4], i2535[5], 0, i2534, 'm_SelectOnDown')
  request.r(i2535[6], i2535[7], 0, i2534, 'm_SelectOnLeft')
  request.r(i2535[8], i2535[9], 0, i2534, 'm_SelectOnRight')
  return i2534
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2536 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2537 = data
  i2536.m_NormalColor = new pc.Color(i2537[0], i2537[1], i2537[2], i2537[3])
  i2536.m_HighlightedColor = new pc.Color(i2537[4], i2537[5], i2537[6], i2537[7])
  i2536.m_PressedColor = new pc.Color(i2537[8], i2537[9], i2537[10], i2537[11])
  i2536.m_SelectedColor = new pc.Color(i2537[12], i2537[13], i2537[14], i2537[15])
  i2536.m_DisabledColor = new pc.Color(i2537[16], i2537[17], i2537[18], i2537[19])
  i2536.m_ColorMultiplier = i2537[20]
  i2536.m_FadeDuration = i2537[21]
  return i2536
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2538 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2539 = data
  request.r(i2539[0], i2539[1], 0, i2538, 'm_HighlightedSprite')
  request.r(i2539[2], i2539[3], 0, i2538, 'm_PressedSprite')
  request.r(i2539[4], i2539[5], 0, i2538, 'm_SelectedSprite')
  request.r(i2539[6], i2539[7], 0, i2538, 'm_DisabledSprite')
  return i2538
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2540 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2541 = data
  i2540.m_NormalTrigger = i2541[0]
  i2540.m_HighlightedTrigger = i2541[1]
  i2540.m_PressedTrigger = i2541[2]
  i2540.m_SelectedTrigger = i2541[3]
  i2540.m_DisabledTrigger = i2541[4]
  return i2540
}

Deserializers["RectAnimator"] = function (request, data, root) {
  var i2542 = root || request.c( 'RectAnimator' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'rectTransform')
  i2542.animateScale = !!i2543[2]
  i2542.isScaleLooping = !!i2543[3]
  i2542.scaleTo = i2543[4]
  i2542.scaleDuration = i2543[5]
  i2542.scaleEaseType = i2543[6]
  i2542.scaleStartDelay = i2543[7]
  i2542.animateMove = !!i2543[8]
  i2542.isMoveLooping = !!i2543[9]
  i2542.moveTo = new pc.Vec2( i2543[10], i2543[11] )
  i2542.moveDuration = i2543[12]
  i2542.moveEaseType = i2543[13]
  i2542.moveLoopType = i2543[14]
  i2542.moveStartDelay = i2543[15]
  i2542.initialPos = new pc.Vec3( i2543[16], i2543[17], i2543[18] )
  i2542.initialScale = new pc.Vec3( i2543[19], i2543[20], i2543[21] )
  return i2542
}

Deserializers["TileManager"] = function (request, data, root) {
  var i2544 = root || request.c( 'TileManager' )
  var i2545 = data
  i2544.cellWidth = i2545[0]
  i2544.cellHeight = i2545[1]
  request.r(i2545[2], i2545[3], 0, i2544, 'canvasGroup')
  var i2547 = i2545[4]
  var i2546 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i2547.length; i += 2) {
  request.r(i2547[i + 0], i2547[i + 1], 1, i2546, '')
  }
  i2544.cells = i2546
  var i2549 = i2545[5]
  var i2548 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i2549.length; i += 2) {
  request.r(i2549[i + 0], i2549[i + 1], 1, i2548, '')
  }
  i2544.tileDataPool = i2548
  i2544.GridHeight = i2545[6]
  i2544.SequenceDelay = i2545[7]
  i2544.BreakDelay = i2545[8]
  i2544.FallDelay = i2545[9]
  i2544.CheckDelay = i2545[10]
  i2544.levelColorValues = i2545[11]
  var i2551 = i2545[12]
  var i2550 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i2551.length; i += 2) {
  request.r(i2551[i + 0], i2551[i + 1], 1, i2550, '')
  }
  i2544.powerupDataPool = i2550
  request.r(i2545[13], i2545[14], 0, i2544, 'dynamitePowerup')
  return i2544
}

Deserializers["SpecialTileManager"] = function (request, data, root) {
  var i2556 = root || request.c( 'SpecialTileManager' )
  var i2557 = data
  request.r(i2557[0], i2557[1], 0, i2556, 'tileManager')
  var i2559 = i2557[2]
  var i2558 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i2559.length; i += 2) {
  request.r(i2559[i + 0], i2559[i + 1], 1, i2558, '')
  }
  i2556.cellList = i2558
  var i2561 = i2557[3]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonGraphic')))
  for(var i = 0; i < i2561.length; i += 2) {
  request.r(i2561[i + 0], i2561[i + 1], 1, i2560, '')
  }
  i2556.SpecialTiles = i2560
  i2556.specialTileTargetPos = i2557[4]
  i2556.pigPos = i2557[5]
  i2556.chickenPos = i2557[6]
  return i2556
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2564 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2565 = data
  i2564.m_Spacing = i2565[0]
  i2564.m_ChildForceExpandWidth = !!i2565[1]
  i2564.m_ChildForceExpandHeight = !!i2565[2]
  i2564.m_ChildControlWidth = !!i2565[3]
  i2564.m_ChildControlHeight = !!i2565[4]
  i2564.m_ChildScaleWidth = !!i2565[5]
  i2564.m_ChildScaleHeight = !!i2565[6]
  i2564.m_ReverseArrangement = !!i2565[7]
  i2564.m_Padding = UnityEngine.RectOffset.FromPaddings(i2565[8], i2565[9], i2565[10], i2565[11])
  i2564.m_ChildAlignment = i2565[12]
  return i2564
}

Deserializers["UIMoveTo"] = function (request, data, root) {
  var i2566 = root || request.c( 'UIMoveTo' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'imageTransform')
  i2566.targetPosition = new pc.Vec2( i2567[2], i2567[3] )
  i2566.anticipationOffset = i2567[4]
  i2566.duration = i2567[5]
  i2566.enableOnStart = !!i2567[6]
  i2566.delayBeforeStart = i2567[7]
  i2566.delayBeforeEnd = i2567[8]
  i2566.OnMovementStart = request.d('UnityEngine.Events.UnityEvent', i2567[9], i2566.OnMovementStart)
  i2566.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i2567[10], i2566.OnMovementComplete)
  var i2569 = i2567[11]
  var i2568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2569.length; i += 2) {
  request.r(i2569[i + 0], i2569[i + 1], 1, i2568, '')
  }
  i2566.objectsToEnable = i2568
  return i2566
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i2571 = data
  i2570.m_StartCorner = i2571[0]
  i2570.m_StartAxis = i2571[1]
  i2570.m_CellSize = new pc.Vec2( i2571[2], i2571[3] )
  i2570.m_Spacing = new pc.Vec2( i2571[4], i2571[5] )
  i2570.m_Constraint = i2571[6]
  i2570.m_ConstraintCount = i2571[7]
  i2570.m_Padding = UnityEngine.RectOffset.FromPaddings(i2571[8], i2571[9], i2571[10], i2571[11])
  i2570.m_ChildAlignment = i2571[12]
  return i2570
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2572 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2573 = data
  i2572.m_ShowMaskGraphic = !!i2573[0]
  return i2572
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2574 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2575 = data
  request.r(i2575[0], i2575[1], 0, i2574, 'skeletonDataAsset')
  request.r(i2575[2], i2575[3], 0, i2574, 'additiveMaterial')
  request.r(i2575[4], i2575[5], 0, i2574, 'multiplyMaterial')
  request.r(i2575[6], i2575[7], 0, i2574, 'screenMaterial')
  i2574.initialSkinName = i2575[8]
  i2574.initialFlipX = !!i2575[9]
  i2574.initialFlipY = !!i2575[10]
  i2574.startingAnimation = i2575[11]
  i2574.startingLoop = !!i2575[12]
  i2574.timeScale = i2575[13]
  i2574.freeze = !!i2575[14]
  i2574.layoutScaleMode = i2575[15]
  i2574.updateWhenInvisible = i2575[16]
  i2574.allowMultipleCanvasRenderers = !!i2575[17]
  var i2577 = i2575[18]
  var i2576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2577.length; i += 2) {
  request.r(i2577[i + 0], i2577[i + 1], 1, i2576, '')
  }
  i2574.canvasRenderers = i2576
  i2574.enableSeparatorSlots = !!i2575[19]
  i2574.updateSeparatorPartLocation = !!i2575[20]
  i2574.updateSeparatorPartScale = !!i2575[21]
  i2574.disableMeshAssignmentOnOverride = !!i2575[22]
  i2574.m_SkeletonColor = new pc.Color(i2575[23], i2575[24], i2575[25], i2575[26])
  i2574.referenceSize = new pc.Vec2( i2575[27], i2575[28] )
  i2574.pivotOffset = new pc.Vec2( i2575[29], i2575[30] )
  i2574.referenceScale = i2575[31]
  i2574.layoutScale = i2575[32]
  i2574.rectTransformSize = new pc.Vec2( i2575[33], i2575[34] )
  i2574.editReferenceRect = !!i2575[35]
  var i2579 = i2575[36]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( i2579[i + 0] );
  }
  i2574.separatorSlotNames = i2578
  var i2581 = i2575[37]
  var i2580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2581.length; i += 2) {
  request.r(i2581[i + 0], i2581[i + 1], 1, i2580, '')
  }
  i2574.separatorParts = i2580
  i2574.physicsPositionInheritanceFactor = new pc.Vec2( i2575[38], i2575[39] )
  i2574.physicsRotationInheritanceFactor = i2575[40]
  request.r(i2575[41], i2575[42], 0, i2574, 'physicsMovementRelativeTo')
  i2574.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2575[43], i2574.meshGenerator)
  i2574.updateTiming = i2575[44]
  i2574.unscaledTime = !!i2575[45]
  request.r(i2575[46], i2575[47], 0, i2574, 'm_Material')
  i2574.m_Maskable = !!i2575[48]
  i2574.m_Color = new pc.Color(i2575[49], i2575[50], i2575[51], i2575[52])
  i2574.m_RaycastTarget = !!i2575[53]
  i2574.m_RaycastPadding = new pc.Vec4( i2575[54], i2575[55], i2575[56], i2575[57] )
  return i2574
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2588 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2589 = data
  i2588.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2589[0], i2588.settings)
  return i2588
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2590 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2591 = data
  i2590.useClipping = !!i2591[0]
  i2590.zSpacing = i2591[1]
  i2590.tintBlack = !!i2591[2]
  i2590.canvasGroupCompatible = !!i2591[3]
  i2590.pmaVertexColors = !!i2591[4]
  i2590.addNormals = !!i2591[5]
  i2590.calculateTangents = !!i2591[6]
  i2590.immutableTriangles = !!i2591[7]
  return i2590
}

Deserializers["AnimatedTileSpawner"] = function (request, data, root) {
  var i2592 = root || request.c( 'AnimatedTileSpawner' )
  var i2593 = data
  var i2595 = i2593[0]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatedTile')))
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 1, i2594, '')
  }
  i2592.tiles = i2594
  return i2592
}

Deserializers["DynamiteEffect"] = function (request, data, root) {
  var i2598 = root || request.c( 'DynamiteEffect' )
  var i2599 = data
  i2598.initialScale = new pc.Vec3( i2599[0], i2599[1], i2599[2] )
  i2598.targetPos = new pc.Vec3( i2599[3], i2599[4], i2599[5] )
  i2598.duration = i2599[6]
  request.r(i2599[7], i2599[8], 0, i2598, 'model')
  request.r(i2599[9], i2599[10], 0, i2598, 'explosionEffectPrefab')
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2601 = data
  i2600.enabled = !!i2601[0]
  request.r(i2601[1], i2601[2], 0, i2600, 'sharedMaterial')
  var i2603 = i2601[3]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 2) {
  request.r(i2603[i + 0], i2603[i + 1], 2, i2602, '')
  }
  i2600.sharedMaterials = i2602
  i2600.receiveShadows = !!i2601[4]
  i2600.shadowCastingMode = i2601[5]
  i2600.sortingLayerID = i2601[6]
  i2600.sortingOrder = i2601[7]
  i2600.lightmapIndex = i2601[8]
  i2600.lightmapSceneIndex = i2601[9]
  i2600.lightmapScaleOffset = new pc.Vec4( i2601[10], i2601[11], i2601[12], i2601[13] )
  i2600.lightProbeUsage = i2601[14]
  i2600.reflectionProbeUsage = i2601[15]
  i2600.color = new pc.Color(i2601[16], i2601[17], i2601[18], i2601[19])
  request.r(i2601[20], i2601[21], 0, i2600, 'sprite')
  i2600.flipX = !!i2601[22]
  i2600.flipY = !!i2601[23]
  i2600.drawMode = i2601[24]
  i2600.size = new pc.Vec2( i2601[25], i2601[26] )
  i2600.tileMode = i2601[27]
  i2600.adaptiveModeThreshold = i2601[28]
  i2600.maskInteraction = i2601[29]
  i2600.spriteSortPoint = i2601[30]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2605 = data
  request.r(i2605[0], i2605[1], 0, i2604, 'animatorController')
  request.r(i2605[2], i2605[3], 0, i2604, 'avatar')
  i2604.updateMode = i2605[4]
  i2604.hasTransformHierarchy = !!i2605[5]
  i2604.applyRootMotion = !!i2605[6]
  var i2607 = i2605[7]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 2) {
  request.r(i2607[i + 0], i2607[i + 1], 2, i2606, '')
  }
  i2604.humanBones = i2606
  i2604.enabled = !!i2605[8]
  return i2604
}

Deserializers["MergeHands"] = function (request, data, root) {
  var i2610 = root || request.c( 'MergeHands' )
  var i2611 = data
  request.r(i2611[0], i2611[1], 0, i2610, 'rectTransform')
  request.r(i2611[2], i2611[3], 0, i2610, 'target1')
  request.r(i2611[4], i2611[5], 0, i2610, 'target2')
  return i2610
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2613 = data
  request.r(i2613[0], i2613[1], 0, i2612, 'm_FirstSelected')
  i2612.m_sendNavigationEvents = !!i2613[2]
  i2612.m_DragThreshold = i2613[3]
  return i2612
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2615 = data
  i2614.m_HorizontalAxis = i2615[0]
  i2614.m_VerticalAxis = i2615[1]
  i2614.m_SubmitButton = i2615[2]
  i2614.m_CancelButton = i2615[3]
  i2614.m_InputActionsPerSecond = i2615[4]
  i2614.m_RepeatDelay = i2615[5]
  i2614.m_ForceModuleActive = !!i2615[6]
  i2614.m_SendPointerHoverToParent = !!i2615[7]
  return i2614
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2616 = root || request.c( 'GameManager' )
  var i2617 = data
  i2616.IsSIP = !!i2617[0]
  i2616.gameType = i2617[1]
  i2616.toggleInactivityPanel = !!i2617[2]
  i2616.OnStartMIP1 = request.d('UnityEngine.Events.UnityEvent', i2617[3], i2616.OnStartMIP1)
  i2616.OnStartMIP2 = request.d('UnityEngine.Events.UnityEvent', i2617[4], i2616.OnStartMIP2)
  i2616.IsDoneCollecting = !!i2617[5]
  i2616.OnLevelComplete = request.d('UnityEngine.Events.UnityEvent', i2617[6], i2616.OnLevelComplete)
  request.r(i2617[7], i2617[8], 0, i2616, 'TutorialPanel')
  request.r(i2617[9], i2617[10], 0, i2616, 'GamePanel')
  request.r(i2617[11], i2617[12], 0, i2616, 'EndCard')
  request.r(i2617[13], i2617[14], 0, i2616, 'CTAPanel')
  request.r(i2617[15], i2617[16], 0, i2616, 'FailPanel')
  request.r(i2617[17], i2617[18], 0, i2616, 'EndCardInActivityPanel')
  i2616.iosLink = i2617[19]
  i2616.androidLink = i2617[20]
  i2616.hasTimer = !!i2617[21]
  i2616.currentTimer = i2617[22]
  i2616.maxTime = i2617[23]
  i2616.gameOver = !!i2617[24]
  request.r(i2617[25], i2617[26], 0, i2616, 'inactivityPanel')
  request.r(i2617[27], i2617[28], 0, i2616, 'inactivityPanelGame')
  i2616.inactivityTime = i2617[29]
  i2616.inactivityTimer = i2617[30]
  request.r(i2617[31], i2617[32], 0, i2616, 'timerText')
  var i2619 = i2617[33]
  var i2618 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.add(request.d('GameManager+FurnitureItems', i2619[i + 0]));
  }
  i2616.items = i2618
  i2616.CurrentLevel = i2617[34]
  var i2621 = i2617[35]
  var i2620 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.add(request.d('GameManager+FurnitureItems', i2621[i + 0]));
  }
  i2616.currentFurnitures = i2620
  var i2623 = i2617[36]
  var i2622 = new (System.Collections.Generic.List$1(Bridge.ns('BasicFade')))
  for(var i = 0; i < i2623.length; i += 2) {
  request.r(i2623[i + 0], i2623[i + 1], 1, i2622, '')
  }
  i2616.gameBoards = i2622
  var i2625 = i2617[37]
  var i2624 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationBase')))
  for(var i = 0; i < i2625.length; i += 2) {
  request.r(i2625[i + 0], i2625[i + 1], 1, i2624, '')
  }
  i2616.furnitureDecorations = i2624
  var i2627 = i2617[38]
  var i2626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2627.length; i += 2) {
  request.r(i2627[i + 0], i2627[i + 1], 1, i2626, '')
  }
  i2616.mip1Objects = i2626
  var i2629 = i2617[39]
  var i2628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2629.length; i += 2) {
  request.r(i2629[i + 0], i2629[i + 1], 1, i2628, '')
  }
  i2616.mip2Objects = i2628
  var i2631 = i2617[40]
  var i2630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2631.length; i += 2) {
  request.r(i2631[i + 0], i2631[i + 1], 1, i2630, '')
  }
  i2616.Feedback = i2630
  var i2633 = i2617[41]
  var i2632 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.add(i2633[i + 0]);
  }
  i2616.audioKeys = i2632
  var i2635 = i2617[42]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(i2635[i + 0]);
  }
  i2616.cameraPanLocation = i2634
  request.r(i2617[43], i2617[44], 0, i2616, 'cameraPanObject')
  i2616.mip1ButtonPress = !!i2617[45]
  i2616.puzzlesToSolve = i2617[46]
  var i2637 = i2617[47]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2637.length; i += 2) {
  request.r(i2637[i + 0], i2637[i + 1], 1, i2636, '')
  }
  i2616.redirectButtons = i2636
  return i2616
}

Deserializers["GameManager+FurnitureItems"] = function (request, data, root) {
  var i2640 = root || request.c( 'GameManager+FurnitureItems' )
  var i2641 = data
  i2640.key = i2641[0]
  request.r(i2641[1], i2641[2], 0, i2640, 'value')
  return i2640
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2648 = root || request.c( 'AudioManager' )
  var i2649 = data
  request.r(i2649[0], i2649[1], 0, i2648, 'library')
  i2648.sfxPoolSize = i2649[2]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2651 = data
  i2650.ambientIntensity = i2651[0]
  i2650.reflectionIntensity = i2651[1]
  i2650.ambientMode = i2651[2]
  i2650.ambientLight = new pc.Color(i2651[3], i2651[4], i2651[5], i2651[6])
  i2650.ambientSkyColor = new pc.Color(i2651[7], i2651[8], i2651[9], i2651[10])
  i2650.ambientGroundColor = new pc.Color(i2651[11], i2651[12], i2651[13], i2651[14])
  i2650.ambientEquatorColor = new pc.Color(i2651[15], i2651[16], i2651[17], i2651[18])
  i2650.fogColor = new pc.Color(i2651[19], i2651[20], i2651[21], i2651[22])
  i2650.fogEndDistance = i2651[23]
  i2650.fogStartDistance = i2651[24]
  i2650.fogDensity = i2651[25]
  i2650.fog = !!i2651[26]
  request.r(i2651[27], i2651[28], 0, i2650, 'skybox')
  i2650.fogMode = i2651[29]
  var i2653 = i2651[30]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2653[i + 0]) );
  }
  i2650.lightmaps = i2652
  i2650.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2651[31], i2650.lightProbes)
  i2650.lightmapsMode = i2651[32]
  i2650.mixedBakeMode = i2651[33]
  i2650.environmentLightingMode = i2651[34]
  i2650.ambientProbe = new pc.SphericalHarmonicsL2(i2651[35])
  i2650.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2651[36])
  i2650.useReferenceAmbientProbe = !!i2651[37]
  request.r(i2651[38], i2651[39], 0, i2650, 'customReflection')
  request.r(i2651[40], i2651[41], 0, i2650, 'defaultReflection')
  i2650.defaultReflectionMode = i2651[42]
  i2650.defaultReflectionResolution = i2651[43]
  i2650.sunLightObjectId = i2651[44]
  i2650.pixelLightCount = i2651[45]
  i2650.defaultReflectionHDR = !!i2651[46]
  i2650.hasLightDataAsset = !!i2651[47]
  i2650.hasManualGenerate = !!i2651[48]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2657 = data
  request.r(i2657[0], i2657[1], 0, i2656, 'lightmapColor')
  request.r(i2657[2], i2657[3], 0, i2656, 'lightmapDirection')
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2658 = root || new UnityEngine.LightProbes()
  var i2659 = data
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2665 = data
  var i2667 = i2665[0]
  var i2666 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2667[i + 0]));
  }
  i2664.ShaderCompilationErrors = i2666
  i2664.name = i2665[1]
  i2664.guid = i2665[2]
  var i2669 = i2665[3]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( i2669[i + 0] );
  }
  i2664.shaderDefinedKeywords = i2668
  var i2671 = i2665[4]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2671[i + 0]) );
  }
  i2664.passes = i2670
  var i2673 = i2665[5]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2673[i + 0]) );
  }
  i2664.usePasses = i2672
  var i2675 = i2665[6]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2675[i + 0]) );
  }
  i2664.defaultParameterValues = i2674
  request.r(i2665[7], i2665[8], 0, i2664, 'unityFallbackShader')
  i2664.readDepth = !!i2665[9]
  i2664.isCreatedByShaderGraph = !!i2665[10]
  i2664.compiled = !!i2665[11]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2679 = data
  i2678.shaderName = i2679[0]
  i2678.errorMessage = i2679[1]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2682 = root || new pc.UnityShaderPass()
  var i2683 = data
  i2682.id = i2683[0]
  i2682.subShaderIndex = i2683[1]
  i2682.name = i2683[2]
  i2682.passType = i2683[3]
  i2682.grabPassTextureName = i2683[4]
  i2682.usePass = !!i2683[5]
  i2682.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[6], i2682.zTest)
  i2682.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[7], i2682.zWrite)
  i2682.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[8], i2682.culling)
  i2682.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2683[9], i2682.blending)
  i2682.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2683[10], i2682.alphaBlending)
  i2682.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[11], i2682.colorWriteMask)
  i2682.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[12], i2682.offsetUnits)
  i2682.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[13], i2682.offsetFactor)
  i2682.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[14], i2682.stencilRef)
  i2682.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[15], i2682.stencilReadMask)
  i2682.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[16], i2682.stencilWriteMask)
  i2682.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2683[17], i2682.stencilOp)
  i2682.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2683[18], i2682.stencilOpFront)
  i2682.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2683[19], i2682.stencilOpBack)
  var i2685 = i2683[20]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2685[i + 0]) );
  }
  i2682.tags = i2684
  var i2687 = i2683[21]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( i2687[i + 0] );
  }
  i2682.passDefinedKeywords = i2686
  var i2689 = i2683[22]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2689[i + 0]) );
  }
  i2682.passDefinedKeywordGroups = i2688
  var i2691 = i2683[23]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2691[i + 0]) );
  }
  i2682.variants = i2690
  var i2693 = i2683[24]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2693[i + 0]) );
  }
  i2682.excludedVariants = i2692
  i2682.hasDepthReader = !!i2683[25]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2695 = data
  i2694.val = i2695[0]
  i2694.name = i2695[1]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2697 = data
  i2696.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2697[0], i2696.src)
  i2696.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2697[1], i2696.dst)
  i2696.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2697[2], i2696.op)
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2699 = data
  i2698.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[0], i2698.pass)
  i2698.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[1], i2698.fail)
  i2698.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[2], i2698.zFail)
  i2698.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[3], i2698.comp)
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2703 = data
  i2702.name = i2703[0]
  i2702.value = i2703[1]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2707 = data
  var i2709 = i2707[0]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( i2709[i + 0] );
  }
  i2706.keywords = i2708
  i2706.hasDiscard = !!i2707[1]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2713 = data
  i2712.passId = i2713[0]
  i2712.subShaderIndex = i2713[1]
  var i2715 = i2713[2]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( i2715[i + 0] );
  }
  i2712.keywords = i2714
  i2712.vertexProgram = i2713[3]
  i2712.fragmentProgram = i2713[4]
  i2712.exportedForWebGl2 = !!i2713[5]
  i2712.readDepth = !!i2713[6]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2719 = data
  request.r(i2719[0], i2719[1], 0, i2718, 'shader')
  i2718.pass = i2719[2]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2723 = data
  i2722.name = i2723[0]
  i2722.type = i2723[1]
  i2722.value = new pc.Vec4( i2723[2], i2723[3], i2723[4], i2723[5] )
  i2722.textureValue = i2723[6]
  i2722.shaderPropertyFlag = i2723[7]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2725 = data
  i2724.name = i2725[0]
  request.r(i2725[1], i2725[2], 0, i2724, 'texture')
  i2724.aabb = i2725[3]
  i2724.vertices = i2725[4]
  i2724.triangles = i2725[5]
  i2724.textureRect = UnityEngine.Rect.MinMaxRect(i2725[6], i2725[7], i2725[8], i2725[9])
  i2724.packedRect = UnityEngine.Rect.MinMaxRect(i2725[10], i2725[11], i2725[12], i2725[13])
  i2724.border = new pc.Vec4( i2725[14], i2725[15], i2725[16], i2725[17] )
  i2724.transparency = i2725[18]
  i2724.bounds = i2725[19]
  i2724.pixelsPerUnit = i2725[20]
  i2724.textureWidth = i2725[21]
  i2724.textureHeight = i2725[22]
  i2724.nativeSize = new pc.Vec2( i2725[23], i2725[24] )
  i2724.pivot = new pc.Vec2( i2725[25], i2725[26] )
  i2724.textureRectOffset = new pc.Vec2( i2725[27], i2725[28] )
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2727 = data
  i2726.name = i2727[0]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2729 = data
  i2728.name = i2729[0]
  i2728.wrapMode = i2729[1]
  i2728.isLooping = !!i2729[2]
  i2728.length = i2729[3]
  var i2731 = i2729[4]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2731[i + 0]) );
  }
  i2728.curves = i2730
  var i2733 = i2729[5]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2733[i + 0]) );
  }
  i2728.events = i2732
  i2728.halfPrecision = !!i2729[6]
  i2728._frameRate = i2729[7]
  i2728.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2729[8], i2728.localBounds)
  i2728.hasMuscleCurves = !!i2729[9]
  var i2735 = i2729[10]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( i2735[i + 0] );
  }
  i2728.clipMuscleConstant = i2734
  i2728.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2729[11], i2728.clipBindingConstant)
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2739 = data
  i2738.path = i2739[0]
  i2738.hash = i2739[1]
  i2738.componentType = i2739[2]
  i2738.property = i2739[3]
  i2738.keys = i2739[4]
  var i2741 = i2739[5]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2741[i + 0]) );
  }
  i2738.objectReferenceKeys = i2740
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2745 = data
  i2744.time = i2745[0]
  request.r(i2745[1], i2745[2], 0, i2744, 'value')
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2749 = data
  i2748.functionName = i2749[0]
  i2748.floatParameter = i2749[1]
  i2748.intParameter = i2749[2]
  i2748.stringParameter = i2749[3]
  request.r(i2749[4], i2749[5], 0, i2748, 'objectReferenceParameter')
  i2748.time = i2749[6]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2751 = data
  i2750.center = new pc.Vec3( i2751[0], i2751[1], i2751[2] )
  i2750.extends = new pc.Vec3( i2751[3], i2751[4], i2751[5] )
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2755 = data
  var i2757 = i2755[0]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( i2757[i + 0] );
  }
  i2754.genericBindings = i2756
  var i2759 = i2755[1]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.push( i2759[i + 0] );
  }
  i2754.pptrCurveMapping = i2758
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2761 = data
  i2760.name = i2761[0]
  i2760.ascent = i2761[1]
  i2760.originalLineHeight = i2761[2]
  i2760.fontSize = i2761[3]
  var i2763 = i2761[4]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2763[i + 0]) );
  }
  i2760.characterInfo = i2762
  request.r(i2761[5], i2761[6], 0, i2760, 'texture')
  i2760.originalFontSize = i2761[7]
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2767 = data
  i2766.index = i2767[0]
  i2766.advance = i2767[1]
  i2766.bearing = i2767[2]
  i2766.glyphWidth = i2767[3]
  i2766.glyphHeight = i2767[4]
  i2766.minX = i2767[5]
  i2766.maxX = i2767[6]
  i2766.minY = i2767[7]
  i2766.maxY = i2767[8]
  i2766.uvBottomLeftX = i2767[9]
  i2766.uvBottomLeftY = i2767[10]
  i2766.uvBottomRightX = i2767[11]
  i2766.uvBottomRightY = i2767[12]
  i2766.uvTopLeftX = i2767[13]
  i2766.uvTopLeftY = i2767[14]
  i2766.uvTopRightX = i2767[15]
  i2766.uvTopRightY = i2767[16]
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2769 = data
  i2768.name = i2769[0]
  var i2771 = i2769[1]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2771[i + 0]) );
  }
  i2768.layers = i2770
  var i2773 = i2769[2]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2773[i + 0]) );
  }
  i2768.parameters = i2772
  i2768.animationClips = i2769[3]
  i2768.avatarUnsupported = i2769[4]
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2777 = data
  i2776.name = i2777[0]
  i2776.defaultWeight = i2777[1]
  i2776.blendingMode = i2777[2]
  i2776.avatarMask = i2777[3]
  i2776.syncedLayerIndex = i2777[4]
  i2776.syncedLayerAffectsTiming = !!i2777[5]
  i2776.syncedLayers = i2777[6]
  i2776.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2777[7], i2776.stateMachine)
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2779 = data
  i2778.id = i2779[0]
  i2778.name = i2779[1]
  i2778.path = i2779[2]
  var i2781 = i2779[3]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2781[i + 0]) );
  }
  i2778.states = i2780
  var i2783 = i2779[4]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2783[i + 0]) );
  }
  i2778.machines = i2782
  var i2785 = i2779[5]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2785[i + 0]) );
  }
  i2778.entryStateTransitions = i2784
  var i2787 = i2779[6]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2787[i + 0]) );
  }
  i2778.exitStateTransitions = i2786
  var i2789 = i2779[7]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2789[i + 0]) );
  }
  i2778.anyStateTransitions = i2788
  i2778.defaultStateId = i2779[8]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2793 = data
  i2792.id = i2793[0]
  i2792.name = i2793[1]
  i2792.cycleOffset = i2793[2]
  i2792.cycleOffsetParameter = i2793[3]
  i2792.cycleOffsetParameterActive = !!i2793[4]
  i2792.mirror = !!i2793[5]
  i2792.mirrorParameter = i2793[6]
  i2792.mirrorParameterActive = !!i2793[7]
  i2792.motionId = i2793[8]
  i2792.nameHash = i2793[9]
  i2792.fullPathHash = i2793[10]
  i2792.speed = i2793[11]
  i2792.speedParameter = i2793[12]
  i2792.speedParameterActive = !!i2793[13]
  i2792.tag = i2793[14]
  i2792.tagHash = i2793[15]
  i2792.writeDefaultValues = !!i2793[16]
  var i2795 = i2793[17]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 2) {
  request.r(i2795[i + 0], i2795[i + 1], 2, i2794, '')
  }
  i2792.behaviours = i2794
  var i2797 = i2793[18]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2797[i + 0]) );
  }
  i2792.transitions = i2796
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2803 = data
  i2802.fullPath = i2803[0]
  i2802.canTransitionToSelf = !!i2803[1]
  i2802.duration = i2803[2]
  i2802.exitTime = i2803[3]
  i2802.hasExitTime = !!i2803[4]
  i2802.hasFixedDuration = !!i2803[5]
  i2802.interruptionSource = i2803[6]
  i2802.offset = i2803[7]
  i2802.orderedInterruption = !!i2803[8]
  i2802.destinationStateId = i2803[9]
  i2802.isExit = !!i2803[10]
  i2802.mute = !!i2803[11]
  i2802.solo = !!i2803[12]
  var i2805 = i2803[13]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2805[i + 0]) );
  }
  i2802.conditions = i2804
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2811 = data
  i2810.destinationStateId = i2811[0]
  i2810.isExit = !!i2811[1]
  i2810.mute = !!i2811[2]
  i2810.solo = !!i2811[3]
  var i2813 = i2811[4]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2813[i + 0]) );
  }
  i2810.conditions = i2812
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2817 = data
  i2816.defaultBool = !!i2817[0]
  i2816.defaultFloat = i2817[1]
  i2816.defaultInt = i2817[2]
  i2816.name = i2817[3]
  i2816.nameHash = i2817[4]
  i2816.type = i2817[5]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2819 = data
  i2818.name = i2819[0]
  i2818.bytes64 = i2819[1]
  i2818.data = i2819[2]
  return i2818
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2820 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2821 = data
  i2820.hashCode = i2821[0]
  request.r(i2821[1], i2821[2], 0, i2820, 'material')
  i2820.materialHashCode = i2821[3]
  request.r(i2821[4], i2821[5], 0, i2820, 'atlas')
  i2820.normalStyle = i2821[6]
  i2820.normalSpacingOffset = i2821[7]
  i2820.boldStyle = i2821[8]
  i2820.boldSpacing = i2821[9]
  i2820.italicStyle = i2821[10]
  i2820.tabSize = i2821[11]
  i2820.m_Version = i2821[12]
  i2820.m_SourceFontFileGUID = i2821[13]
  request.r(i2821[14], i2821[15], 0, i2820, 'm_SourceFontFile_EditorRef')
  request.r(i2821[16], i2821[17], 0, i2820, 'm_SourceFontFile')
  i2820.m_AtlasPopulationMode = i2821[18]
  i2820.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2821[19], i2820.m_FaceInfo)
  var i2823 = i2821[20]
  var i2822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.add(request.d('UnityEngine.TextCore.Glyph', i2823[i + 0]));
  }
  i2820.m_GlyphTable = i2822
  var i2825 = i2821[21]
  var i2824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.add(request.d('TMPro.TMP_Character', i2825[i + 0]));
  }
  i2820.m_CharacterTable = i2824
  var i2827 = i2821[22]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 2) {
  request.r(i2827[i + 0], i2827[i + 1], 2, i2826, '')
  }
  i2820.m_AtlasTextures = i2826
  i2820.m_AtlasTextureIndex = i2821[23]
  i2820.m_IsMultiAtlasTexturesEnabled = !!i2821[24]
  i2820.m_ClearDynamicDataOnBuild = !!i2821[25]
  var i2829 = i2821[26]
  var i2828 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.add(request.d('UnityEngine.TextCore.GlyphRect', i2829[i + 0]));
  }
  i2820.m_UsedGlyphRects = i2828
  var i2831 = i2821[27]
  var i2830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.add(request.d('UnityEngine.TextCore.GlyphRect', i2831[i + 0]));
  }
  i2820.m_FreeGlyphRects = i2830
  i2820.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2821[28], i2820.m_fontInfo)
  i2820.m_AtlasWidth = i2821[29]
  i2820.m_AtlasHeight = i2821[30]
  i2820.m_AtlasPadding = i2821[31]
  i2820.m_AtlasRenderMode = i2821[32]
  var i2833 = i2821[33]
  var i2832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.add(request.d('TMPro.TMP_Glyph', i2833[i + 0]));
  }
  i2820.m_glyphInfoList = i2832
  i2820.m_KerningTable = request.d('TMPro.KerningTable', i2821[34], i2820.m_KerningTable)
  i2820.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2821[35], i2820.m_FontFeatureTable)
  var i2835 = i2821[36]
  var i2834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2835.length; i += 2) {
  request.r(i2835[i + 0], i2835[i + 1], 1, i2834, '')
  }
  i2820.fallbackFontAssets = i2834
  var i2837 = i2821[37]
  var i2836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2837.length; i += 2) {
  request.r(i2837[i + 0], i2837[i + 1], 1, i2836, '')
  }
  i2820.m_FallbackFontAssetTable = i2836
  i2820.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2821[38], i2820.m_CreationSettings)
  var i2839 = i2821[39]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( request.d('TMPro.TMP_FontWeightPair', i2839[i + 0]) );
  }
  i2820.m_FontWeightTable = i2838
  var i2841 = i2821[40]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('TMPro.TMP_FontWeightPair', i2841[i + 0]) );
  }
  i2820.fontWeights = i2840
  return i2820
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2842 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2843 = data
  i2842.m_FaceIndex = i2843[0]
  i2842.m_FamilyName = i2843[1]
  i2842.m_StyleName = i2843[2]
  i2842.m_PointSize = i2843[3]
  i2842.m_Scale = i2843[4]
  i2842.m_UnitsPerEM = i2843[5]
  i2842.m_LineHeight = i2843[6]
  i2842.m_AscentLine = i2843[7]
  i2842.m_CapLine = i2843[8]
  i2842.m_MeanLine = i2843[9]
  i2842.m_Baseline = i2843[10]
  i2842.m_DescentLine = i2843[11]
  i2842.m_SuperscriptOffset = i2843[12]
  i2842.m_SuperscriptSize = i2843[13]
  i2842.m_SubscriptOffset = i2843[14]
  i2842.m_SubscriptSize = i2843[15]
  i2842.m_UnderlineOffset = i2843[16]
  i2842.m_UnderlineThickness = i2843[17]
  i2842.m_StrikethroughOffset = i2843[18]
  i2842.m_StrikethroughThickness = i2843[19]
  i2842.m_TabWidth = i2843[20]
  return i2842
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2846 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2847 = data
  i2846.m_Index = i2847[0]
  i2846.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2847[1], i2846.m_Metrics)
  i2846.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2847[2], i2846.m_GlyphRect)
  i2846.m_Scale = i2847[3]
  i2846.m_AtlasIndex = i2847[4]
  i2846.m_ClassDefinitionType = i2847[5]
  return i2846
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2848 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2849 = data
  i2848.m_Width = i2849[0]
  i2848.m_Height = i2849[1]
  i2848.m_HorizontalBearingX = i2849[2]
  i2848.m_HorizontalBearingY = i2849[3]
  i2848.m_HorizontalAdvance = i2849[4]
  return i2848
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2850 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2851 = data
  i2850.m_X = i2851[0]
  i2850.m_Y = i2851[1]
  i2850.m_Width = i2851[2]
  i2850.m_Height = i2851[3]
  return i2850
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2854 = root || request.c( 'TMPro.TMP_Character' )
  var i2855 = data
  i2854.m_ElementType = i2855[0]
  i2854.m_Unicode = i2855[1]
  i2854.m_GlyphIndex = i2855[2]
  i2854.m_Scale = i2855[3]
  return i2854
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2860 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2861 = data
  i2860.Name = i2861[0]
  i2860.PointSize = i2861[1]
  i2860.Scale = i2861[2]
  i2860.CharacterCount = i2861[3]
  i2860.LineHeight = i2861[4]
  i2860.Baseline = i2861[5]
  i2860.Ascender = i2861[6]
  i2860.CapHeight = i2861[7]
  i2860.Descender = i2861[8]
  i2860.CenterLine = i2861[9]
  i2860.SuperscriptOffset = i2861[10]
  i2860.SubscriptOffset = i2861[11]
  i2860.SubSize = i2861[12]
  i2860.Underline = i2861[13]
  i2860.UnderlineThickness = i2861[14]
  i2860.strikethrough = i2861[15]
  i2860.strikethroughThickness = i2861[16]
  i2860.TabWidth = i2861[17]
  i2860.Padding = i2861[18]
  i2860.AtlasWidth = i2861[19]
  i2860.AtlasHeight = i2861[20]
  return i2860
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2864 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2865 = data
  i2864.id = i2865[0]
  i2864.x = i2865[1]
  i2864.y = i2865[2]
  i2864.width = i2865[3]
  i2864.height = i2865[4]
  i2864.xOffset = i2865[5]
  i2864.yOffset = i2865[6]
  i2864.xAdvance = i2865[7]
  i2864.scale = i2865[8]
  return i2864
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2866 = root || request.c( 'TMPro.KerningTable' )
  var i2867 = data
  var i2869 = i2867[0]
  var i2868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.add(request.d('TMPro.KerningPair', i2869[i + 0]));
  }
  i2866.kerningPairs = i2868
  return i2866
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2872 = root || request.c( 'TMPro.KerningPair' )
  var i2873 = data
  i2872.xOffset = i2873[0]
  i2872.m_FirstGlyph = i2873[1]
  i2872.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2873[2], i2872.m_FirstGlyphAdjustments)
  i2872.m_SecondGlyph = i2873[3]
  i2872.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2873[4], i2872.m_SecondGlyphAdjustments)
  i2872.m_IgnoreSpacingAdjustments = !!i2873[5]
  return i2872
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2874 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2875 = data
  var i2877 = i2875[0]
  var i2876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2877[i + 0]));
  }
  i2874.m_GlyphPairAdjustmentRecords = i2876
  return i2874
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2880 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2881 = data
  i2880.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2881[0], i2880.m_FirstAdjustmentRecord)
  i2880.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2881[1], i2880.m_SecondAdjustmentRecord)
  i2880.m_FeatureLookupFlags = i2881[2]
  return i2880
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2884 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2885 = data
  i2884.sourceFontFileName = i2885[0]
  i2884.sourceFontFileGUID = i2885[1]
  i2884.pointSizeSamplingMode = i2885[2]
  i2884.pointSize = i2885[3]
  i2884.padding = i2885[4]
  i2884.packingMode = i2885[5]
  i2884.atlasWidth = i2885[6]
  i2884.atlasHeight = i2885[7]
  i2884.characterSetSelectionMode = i2885[8]
  i2884.characterSequence = i2885[9]
  i2884.referencedFontAssetGUID = i2885[10]
  i2884.referencedTextAssetGUID = i2885[11]
  i2884.fontStyle = i2885[12]
  i2884.fontStyleModifier = i2885[13]
  i2884.renderMode = i2885[14]
  i2884.includeFontFeatures = !!i2885[15]
  return i2884
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2888 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2889 = data
  request.r(i2889[0], i2889[1], 0, i2888, 'regularTypeface')
  request.r(i2889[2], i2889[3], 0, i2888, 'italicTypeface')
  return i2888
}

Deserializers["ItemData"] = function (request, data, root) {
  var i2890 = root || request.c( 'ItemData' )
  var i2891 = data
  i2890.itemName = i2891[0]
  request.r(i2891[1], i2891[2], 0, i2890, 'itemIcon')
  i2890.ItemCount = i2891[3]
  request.r(i2891[4], i2891[5], 0, i2890, 'collectItemSprite')
  i2890.color = i2891[6]
  request.r(i2891[7], i2891[8], 0, i2890, 'DecorationSprite')
  return i2890
}

Deserializers["TileData"] = function (request, data, root) {
  var i2892 = root || request.c( 'TileData' )
  var i2893 = data
  i2892.tileName = i2893[0]
  request.r(i2893[1], i2893[2], 0, i2892, 'tileSprite')
  i2892.isPowerup = !!i2893[3]
  i2892.isBreakable = !!i2893[4]
  i2892.isSwappable = !!i2893[5]
  i2892.isSpecialBreakable = !!i2893[6]
  return i2892
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2894 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2895 = data
  var i2897 = i2895[0]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 2) {
  request.r(i2897[i + 0], i2897[i + 1], 2, i2896, '')
  }
  i2894.atlasAssets = i2896
  i2894.scale = i2895[1]
  request.r(i2895[2], i2895[3], 0, i2894, 'skeletonJSON')
  i2894.isUpgradingBlendModeMaterials = !!i2895[4]
  i2894.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2895[5], i2894.blendModeMaterials)
  var i2899 = i2895[6]
  var i2898 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2899.length; i += 2) {
  request.r(i2899[i + 0], i2899[i + 1], 1, i2898, '')
  }
  i2894.skeletonDataModifiers = i2898
  var i2901 = i2895[7]
  var i2900 = []
  for(var i = 0; i < i2901.length; i += 1) {
    i2900.push( i2901[i + 0] );
  }
  i2894.fromAnimation = i2900
  var i2903 = i2895[8]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.push( i2903[i + 0] );
  }
  i2894.toAnimation = i2902
  i2894.duration = i2895[9]
  i2894.defaultMix = i2895[10]
  request.r(i2895[11], i2895[12], 0, i2894, 'controller')
  return i2894
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2906 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2907 = data
  i2906.applyAdditiveMaterial = !!i2907[0]
  var i2909 = i2907[1]
  var i2908 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2909[i + 0]));
  }
  i2906.additiveMaterials = i2908
  var i2911 = i2907[2]
  var i2910 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2911[i + 0]));
  }
  i2906.multiplyMaterials = i2910
  var i2913 = i2907[3]
  var i2912 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2913[i + 0]));
  }
  i2906.screenMaterials = i2912
  i2906.requiresBlendModeMaterials = !!i2907[4]
  return i2906
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2916 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2917 = data
  i2916.pageName = i2917[0]
  request.r(i2917[1], i2917[2], 0, i2916, 'material')
  return i2916
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2920 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2921 = data
  request.r(i2921[0], i2921[1], 0, i2920, 'atlasFile')
  var i2923 = i2921[2]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 2) {
  request.r(i2923[i + 0], i2923[i + 1], 2, i2922, '')
  }
  i2920.materials = i2922
  i2920.textureLoadingMode = i2921[3]
  request.r(i2921[4], i2921[5], 0, i2920, 'onDemandTextureLoader')
  return i2920
}

Deserializers["DynamitePowerup"] = function (request, data, root) {
  var i2924 = root || request.c( 'DynamitePowerup' )
  var i2925 = data
  i2924.explosionRadius = i2925[0]
  i2924.tileName = i2925[1]
  request.r(i2925[2], i2925[3], 0, i2924, 'tileSprite')
  i2924.isPowerup = !!i2925[4]
  i2924.isBreakable = !!i2925[5]
  i2924.isSwappable = !!i2925[6]
  i2924.isSpecialBreakable = !!i2925[7]
  return i2924
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i2926 = root || request.c( 'AudioLibrary' )
  var i2927 = data
  var i2929 = i2927[0]
  var i2928 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.add(request.d('AudioLibrary+ClipEntry', i2929[i + 0]));
  }
  i2926.clips = i2928
  return i2926
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i2932 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i2933 = data
  i2932.key = i2933[0]
  i2932.channel = i2933[1]
  request.r(i2933[2], i2933[3], 0, i2932, 'clip')
  i2932.volume = i2933[4]
  i2932.loop = !!i2933[5]
  return i2932
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2934 = root || request.c( 'TMPro.TMP_Settings' )
  var i2935 = data
  i2934.m_enableWordWrapping = !!i2935[0]
  i2934.m_enableKerning = !!i2935[1]
  i2934.m_enableExtraPadding = !!i2935[2]
  i2934.m_enableTintAllSprites = !!i2935[3]
  i2934.m_enableParseEscapeCharacters = !!i2935[4]
  i2934.m_EnableRaycastTarget = !!i2935[5]
  i2934.m_GetFontFeaturesAtRuntime = !!i2935[6]
  i2934.m_missingGlyphCharacter = i2935[7]
  i2934.m_warningsDisabled = !!i2935[8]
  request.r(i2935[9], i2935[10], 0, i2934, 'm_defaultFontAsset')
  i2934.m_defaultFontAssetPath = i2935[11]
  i2934.m_defaultFontSize = i2935[12]
  i2934.m_defaultAutoSizeMinRatio = i2935[13]
  i2934.m_defaultAutoSizeMaxRatio = i2935[14]
  i2934.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2935[15], i2935[16] )
  i2934.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2935[17], i2935[18] )
  i2934.m_autoSizeTextContainer = !!i2935[19]
  i2934.m_IsTextObjectScaleStatic = !!i2935[20]
  var i2937 = i2935[21]
  var i2936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2937.length; i += 2) {
  request.r(i2937[i + 0], i2937[i + 1], 1, i2936, '')
  }
  i2934.m_fallbackFontAssets = i2936
  i2934.m_matchMaterialPreset = !!i2935[22]
  request.r(i2935[23], i2935[24], 0, i2934, 'm_defaultSpriteAsset')
  i2934.m_defaultSpriteAssetPath = i2935[25]
  i2934.m_enableEmojiSupport = !!i2935[26]
  i2934.m_MissingCharacterSpriteUnicode = i2935[27]
  i2934.m_defaultColorGradientPresetsPath = i2935[28]
  request.r(i2935[29], i2935[30], 0, i2934, 'm_defaultStyleSheet')
  i2934.m_StyleSheetsResourcePath = i2935[31]
  request.r(i2935[32], i2935[33], 0, i2934, 'm_leadingCharacters')
  request.r(i2935[34], i2935[35], 0, i2934, 'm_followingCharacters')
  i2934.m_UseModernHangulLineBreakingRules = !!i2935[36]
  return i2934
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2938 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2939 = data
  i2938.hashCode = i2939[0]
  request.r(i2939[1], i2939[2], 0, i2938, 'material')
  i2938.materialHashCode = i2939[3]
  request.r(i2939[4], i2939[5], 0, i2938, 'spriteSheet')
  var i2941 = i2939[6]
  var i2940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.add(request.d('TMPro.TMP_Sprite', i2941[i + 0]));
  }
  i2938.spriteInfoList = i2940
  var i2943 = i2939[7]
  var i2942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2943.length; i += 2) {
  request.r(i2943[i + 0], i2943[i + 1], 1, i2942, '')
  }
  i2938.fallbackSpriteAssets = i2942
  i2938.m_Version = i2939[8]
  i2938.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2939[9], i2938.m_FaceInfo)
  var i2945 = i2939[10]
  var i2944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.add(request.d('TMPro.TMP_SpriteCharacter', i2945[i + 0]));
  }
  i2938.m_SpriteCharacterTable = i2944
  var i2947 = i2939[11]
  var i2946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2947.length; i += 1) {
    i2946.add(request.d('TMPro.TMP_SpriteGlyph', i2947[i + 0]));
  }
  i2938.m_SpriteGlyphTable = i2946
  return i2938
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2950 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2951 = data
  i2950.name = i2951[0]
  i2950.hashCode = i2951[1]
  i2950.unicode = i2951[2]
  i2950.pivot = new pc.Vec2( i2951[3], i2951[4] )
  request.r(i2951[5], i2951[6], 0, i2950, 'sprite')
  i2950.id = i2951[7]
  i2950.x = i2951[8]
  i2950.y = i2951[9]
  i2950.width = i2951[10]
  i2950.height = i2951[11]
  i2950.xOffset = i2951[12]
  i2950.yOffset = i2951[13]
  i2950.xAdvance = i2951[14]
  i2950.scale = i2951[15]
  return i2950
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2956 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2957 = data
  i2956.m_Name = i2957[0]
  i2956.m_HashCode = i2957[1]
  i2956.m_ElementType = i2957[2]
  i2956.m_Unicode = i2957[3]
  i2956.m_GlyphIndex = i2957[4]
  i2956.m_Scale = i2957[5]
  return i2956
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2960 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2961 = data
  request.r(i2961[0], i2961[1], 0, i2960, 'sprite')
  i2960.m_Index = i2961[2]
  i2960.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2961[3], i2960.m_Metrics)
  i2960.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2961[4], i2960.m_GlyphRect)
  i2960.m_Scale = i2961[5]
  i2960.m_AtlasIndex = i2961[6]
  i2960.m_ClassDefinitionType = i2961[7]
  return i2960
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2962 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2963 = data
  var i2965 = i2963[0]
  var i2964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.add(request.d('TMPro.TMP_Style', i2965[i + 0]));
  }
  i2962.m_StyleList = i2964
  return i2962
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2968 = root || request.c( 'TMPro.TMP_Style' )
  var i2969 = data
  i2968.m_Name = i2969[0]
  i2968.m_HashCode = i2969[1]
  i2968.m_OpeningDefinition = i2969[2]
  i2968.m_ClosingDefinition = i2969[3]
  i2968.m_OpeningTagArray = i2969[4]
  i2968.m_ClosingTagArray = i2969[5]
  i2968.m_OpeningTagUnicodeArray = i2969[6]
  i2968.m_ClosingTagUnicodeArray = i2969[7]
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2971 = data
  var i2973 = i2971[0]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 1) {
    i2972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2973[i + 0]) );
  }
  i2970.files = i2972
  i2970.componentToPrefabIds = i2971[1]
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2977 = data
  i2976.path = i2977[0]
  request.r(i2977[1], i2977[2], 0, i2976, 'unityObject')
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2979 = data
  var i2981 = i2979[0]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2981[i + 0]) );
  }
  i2978.scriptsExecutionOrder = i2980
  var i2983 = i2979[1]
  var i2982 = []
  for(var i = 0; i < i2983.length; i += 1) {
    i2982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2983[i + 0]) );
  }
  i2978.sortingLayers = i2982
  var i2985 = i2979[2]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2985[i + 0]) );
  }
  i2978.cullingLayers = i2984
  i2978.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2979[3], i2978.timeSettings)
  i2978.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2979[4], i2978.physicsSettings)
  i2978.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2979[5], i2978.physics2DSettings)
  i2978.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2979[6], i2978.qualitySettings)
  i2978.enableRealtimeShadows = !!i2979[7]
  i2978.enableAutoInstancing = !!i2979[8]
  i2978.enableDynamicBatching = !!i2979[9]
  i2978.lightmapEncodingQuality = i2979[10]
  i2978.desiredColorSpace = i2979[11]
  var i2987 = i2979[12]
  var i2986 = []
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.push( i2987[i + 0] );
  }
  i2978.allTags = i2986
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2991 = data
  i2990.name = i2991[0]
  i2990.value = i2991[1]
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2995 = data
  i2994.id = i2995[0]
  i2994.name = i2995[1]
  i2994.value = i2995[2]
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2999 = data
  i2998.id = i2999[0]
  i2998.name = i2999[1]
  return i2998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3001 = data
  i3000.fixedDeltaTime = i3001[0]
  i3000.maximumDeltaTime = i3001[1]
  i3000.timeScale = i3001[2]
  i3000.maximumParticleTimestep = i3001[3]
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3003 = data
  i3002.gravity = new pc.Vec3( i3003[0], i3003[1], i3003[2] )
  i3002.defaultSolverIterations = i3003[3]
  i3002.bounceThreshold = i3003[4]
  i3002.autoSyncTransforms = !!i3003[5]
  i3002.autoSimulation = !!i3003[6]
  var i3005 = i3003[7]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 1) {
    i3004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3005[i + 0]) );
  }
  i3002.collisionMatrix = i3004
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3009 = data
  i3008.enabled = !!i3009[0]
  i3008.layerId = i3009[1]
  i3008.otherLayerId = i3009[2]
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3011 = data
  request.r(i3011[0], i3011[1], 0, i3010, 'material')
  i3010.gravity = new pc.Vec2( i3011[2], i3011[3] )
  i3010.positionIterations = i3011[4]
  i3010.velocityIterations = i3011[5]
  i3010.velocityThreshold = i3011[6]
  i3010.maxLinearCorrection = i3011[7]
  i3010.maxAngularCorrection = i3011[8]
  i3010.maxTranslationSpeed = i3011[9]
  i3010.maxRotationSpeed = i3011[10]
  i3010.baumgarteScale = i3011[11]
  i3010.baumgarteTOIScale = i3011[12]
  i3010.timeToSleep = i3011[13]
  i3010.linearSleepTolerance = i3011[14]
  i3010.angularSleepTolerance = i3011[15]
  i3010.defaultContactOffset = i3011[16]
  i3010.autoSimulation = !!i3011[17]
  i3010.queriesHitTriggers = !!i3011[18]
  i3010.queriesStartInColliders = !!i3011[19]
  i3010.callbacksOnDisable = !!i3011[20]
  i3010.reuseCollisionCallbacks = !!i3011[21]
  i3010.autoSyncTransforms = !!i3011[22]
  var i3013 = i3011[23]
  var i3012 = []
  for(var i = 0; i < i3013.length; i += 1) {
    i3012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3013[i + 0]) );
  }
  i3010.collisionMatrix = i3012
  return i3010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3017 = data
  i3016.enabled = !!i3017[0]
  i3016.layerId = i3017[1]
  i3016.otherLayerId = i3017[2]
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3019 = data
  var i3021 = i3019[0]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3021[i + 0]) );
  }
  i3018.qualityLevels = i3020
  var i3023 = i3019[1]
  var i3022 = []
  for(var i = 0; i < i3023.length; i += 1) {
    i3022.push( i3023[i + 0] );
  }
  i3018.names = i3022
  i3018.shadows = i3019[2]
  i3018.anisotropicFiltering = i3019[3]
  i3018.antiAliasing = i3019[4]
  i3018.lodBias = i3019[5]
  i3018.shadowCascades = i3019[6]
  i3018.shadowDistance = i3019[7]
  i3018.shadowmaskMode = i3019[8]
  i3018.shadowProjection = i3019[9]
  i3018.shadowResolution = i3019[10]
  i3018.softParticles = !!i3019[11]
  i3018.softVegetation = !!i3019[12]
  i3018.activeColorSpace = i3019[13]
  i3018.desiredColorSpace = i3019[14]
  i3018.masterTextureLimit = i3019[15]
  i3018.maxQueuedFrames = i3019[16]
  i3018.particleRaycastBudget = i3019[17]
  i3018.pixelLightCount = i3019[18]
  i3018.realtimeReflectionProbes = !!i3019[19]
  i3018.shadowCascade2Split = i3019[20]
  i3018.shadowCascade4Split = new pc.Vec3( i3019[21], i3019[22], i3019[23] )
  i3018.streamingMipmapsActive = !!i3019[24]
  i3018.vSyncCount = i3019[25]
  i3018.asyncUploadBufferSize = i3019[26]
  i3018.asyncUploadTimeSlice = i3019[27]
  i3018.billboardsFaceCameraPosition = !!i3019[28]
  i3018.shadowNearPlaneOffset = i3019[29]
  i3018.streamingMipmapsMemoryBudget = i3019[30]
  i3018.maximumLODLevel = i3019[31]
  i3018.streamingMipmapsAddAllCameras = !!i3019[32]
  i3018.streamingMipmapsMaxLevelReduction = i3019[33]
  i3018.streamingMipmapsRenderersPerFrame = i3019[34]
  i3018.resolutionScalingFixedDPIFactor = i3019[35]
  i3018.streamingMipmapsMaxFileIORequests = i3019[36]
  i3018.currentQualityLevel = i3019[37]
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3029 = data
  i3028.weight = i3029[0]
  i3028.vertices = i3029[1]
  i3028.normals = i3029[2]
  i3028.tangents = i3029[3]
  return i3028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3033 = data
  i3032.mode = i3033[0]
  i3032.parameter = i3033[1]
  i3032.threshold = i3033[2]
  return i3032
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3034 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3035 = data
  i3034.xPlacement = i3035[0]
  i3034.yPlacement = i3035[1]
  i3034.xAdvance = i3035[2]
  i3034.yAdvance = i3035[3]
  return i3034
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3036 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3037 = data
  i3036.m_GlyphIndex = i3037[0]
  i3036.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3037[1], i3036.m_GlyphValueRecord)
  return i3036
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3038 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3039 = data
  i3038.m_XPlacement = i3039[0]
  i3038.m_YPlacement = i3039[1]
  i3038.m_XAdvance = i3039[2]
  i3038.m_YAdvance = i3039[3]
  return i3038
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[27],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[27],"98":[99],"100":[101],"102":[101],"29":[0],"20":[17],"103":[17],"104":[17],"105":[27],"106":[107],"108":[0],"109":[1,0],"110":[99],"43":[1,0],"111":[51,99],"112":[99],"113":[99,114],"115":[76],"116":[84],"117":[107],"118":[119],"120":[50],"121":[27],"122":[123],"124":[0],"125":[99,0],"5":[0,1],"126":[0],"127":[1,0],"128":[99],"129":[1,0],"130":[0],"131":[132],"133":[132],"134":[132],"135":[0],"136":[0],"31":[29],"4":[1,0],"137":[0],"30":[29],"138":[0],"46":[0],"44":[0],"139":[0],"140":[0],"141":[0],"142":[0],"47":[0],"143":[0],"144":[1,0],"145":[0],"146":[0],"147":[0],"148":[0],"149":[1,0],"150":[0],"151":[54],"152":[54],"55":[54],"153":[54],"154":[27],"155":[27]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","Item","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.Sprite","ItemData","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","TileCell","TileData","Tile","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","CartoonFX.CFXR_Effect","UnityEngine.Light","AnimatedTile","UnityEngine.GameObject","UnityEngine.TrailRenderer","StateEvents","PositionTracking","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BasicFade","UnityEngine.CanvasGroup","UnityEngine.UI.Button","AppearAnimation","PlayerGuide","GameManager","RectAnimator","TileManager","DynamitePowerup","DynamiteEffect","SpecialTileManager","Spine.Unity.SkeletonGraphic","UnityEngine.UI.HorizontalLayoutGroup","UIMoveTo","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","Spine.Unity.SkeletonDataAsset","AnimatedTileSpawner","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MergeHands","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AudioManager","AudioLibrary","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CartoonFX.CFXR_EmissionBySurface","CartoonFX.CFXR_ParticleText","Kino.Bloom","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2023.1.0f1";

Deserializers.productName = "Piggy Kingdom - Renovation";

Deserializers.lunaInitializationTime = "09/29/2025 07:36:59";

Deserializers.lunaDaysRunning = "8.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Farm-Renovation";

Deserializers.lunaAppID = "32752";

Deserializers.projectId = "bab41f24a77b7a944b71277894eff5d3";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.8.2\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1938";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5475";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "aa18a311-0a72-4f4c-b1a3-c359d6c173d7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

