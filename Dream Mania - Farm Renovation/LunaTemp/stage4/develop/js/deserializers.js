var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.JointSpring' )
  var i2191 = data
  i2190.spring = i2191[0]
  i2190.damper = i2191[1]
  i2190.targetPosition = i2191[2]
  return i2190
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.JointMotor' )
  var i2193 = data
  i2192.m_TargetVelocity = i2193[0]
  i2192.m_Force = i2193[1]
  i2192.m_FreeSpin = i2193[2]
  return i2192
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.JointLimits' )
  var i2195 = data
  i2194.m_Min = i2195[0]
  i2194.m_Max = i2195[1]
  i2194.m_Bounciness = i2195[2]
  i2194.m_BounceMinVelocity = i2195[3]
  i2194.m_ContactDistance = i2195[4]
  i2194.minBounce = i2195[5]
  i2194.maxBounce = i2195[6]
  return i2194
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.JointDrive' )
  var i2197 = data
  i2196.m_PositionSpring = i2197[0]
  i2196.m_PositionDamper = i2197[1]
  i2196.m_MaximumForce = i2197[2]
  i2196.m_UseAcceleration = i2197[3]
  return i2196
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2199 = data
  i2198.m_Spring = i2199[0]
  i2198.m_Damper = i2199[1]
  return i2198
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2201 = data
  i2200.m_Limit = i2201[0]
  i2200.m_Bounciness = i2201[1]
  i2200.m_ContactDistance = i2201[2]
  return i2200
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2203 = data
  i2202.m_ExtremumSlip = i2203[0]
  i2202.m_ExtremumValue = i2203[1]
  i2202.m_AsymptoteSlip = i2203[2]
  i2202.m_AsymptoteValue = i2203[3]
  i2202.m_Stiffness = i2203[4]
  return i2202
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2205 = data
  i2204.m_LowerAngle = i2205[0]
  i2204.m_UpperAngle = i2205[1]
  return i2204
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2207 = data
  i2206.m_MotorSpeed = i2207[0]
  i2206.m_MaximumMotorTorque = i2207[1]
  return i2206
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2209 = data
  i2208.m_DampingRatio = i2209[0]
  i2208.m_Frequency = i2209[1]
  i2208.m_Angle = i2209[2]
  return i2208
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2211 = data
  i2210.m_LowerTranslation = i2211[0]
  i2210.m_UpperTranslation = i2211[1]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2213 = data
  i2212.name = i2213[0]
  i2212.width = i2213[1]
  i2212.height = i2213[2]
  i2212.mipmapCount = i2213[3]
  i2212.anisoLevel = i2213[4]
  i2212.filterMode = i2213[5]
  i2212.hdr = !!i2213[6]
  i2212.format = i2213[7]
  i2212.wrapMode = i2213[8]
  i2212.alphaIsTransparency = !!i2213[9]
  i2212.alphaSource = i2213[10]
  i2212.graphicsFormat = i2213[11]
  i2212.sRGBTexture = !!i2213[12]
  i2212.desiredColorSpace = i2213[13]
  i2212.wrapU = i2213[14]
  i2212.wrapV = i2213[15]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2215 = data
  i2214.pivot = new pc.Vec2( i2215[0], i2215[1] )
  i2214.anchorMin = new pc.Vec2( i2215[2], i2215[3] )
  i2214.anchorMax = new pc.Vec2( i2215[4], i2215[5] )
  i2214.sizeDelta = new pc.Vec2( i2215[6], i2215[7] )
  i2214.anchoredPosition3D = new pc.Vec3( i2215[8], i2215[9], i2215[10] )
  i2214.rotation = new pc.Quat(i2215[11], i2215[12], i2215[13], i2215[14])
  i2214.scale = new pc.Vec3( i2215[15], i2215[16], i2215[17] )
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2217 = data
  i2216.cullTransparentMesh = !!i2217[0]
  return i2216
}

Deserializers["Item"] = function (request, data, root) {
  var i2218 = root || request.c( 'Item' )
  var i2219 = data
  request.r(i2219[0], i2219[1], 0, i2218, 'itemImage')
  request.r(i2219[2], i2219[3], 0, i2218, 'collectItemImage')
  request.r(i2219[4], i2219[5], 0, i2218, 'itemCountText')
  i2218.ItemCount = i2219[6]
  request.r(i2219[7], i2219[8], 0, i2218, 'completeSprite')
  request.r(i2219[9], i2219[10], 0, i2218, 'data')
  request.r(i2219[11], i2219[12], 0, i2218, 'UIMovement')
  request.r(i2219[13], i2219[14], 0, i2218, 'FurnitureImage')
  i2218.portraitLocation = new pc.Vec2( i2219[15], i2219[16] )
  i2218.landscapeLocation = new pc.Vec2( i2219[17], i2219[18] )
  return i2218
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.UI.Image' )
  var i2221 = data
  request.r(i2221[0], i2221[1], 0, i2220, 'm_Sprite')
  i2220.m_Type = i2221[2]
  i2220.m_PreserveAspect = !!i2221[3]
  i2220.m_FillCenter = !!i2221[4]
  i2220.m_FillMethod = i2221[5]
  i2220.m_FillAmount = i2221[6]
  i2220.m_FillClockwise = !!i2221[7]
  i2220.m_FillOrigin = i2221[8]
  i2220.m_UseSpriteMesh = !!i2221[9]
  i2220.m_PixelsPerUnitMultiplier = i2221[10]
  request.r(i2221[11], i2221[12], 0, i2220, 'm_Material')
  i2220.m_Maskable = !!i2221[13]
  i2220.m_Color = new pc.Color(i2221[14], i2221[15], i2221[16], i2221[17])
  i2220.m_RaycastTarget = !!i2221[18]
  i2220.m_RaycastPadding = new pc.Vec4( i2221[19], i2221[20], i2221[21], i2221[22] )
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2223 = data
  i2222.name = i2223[0]
  i2222.tagId = i2223[1]
  i2222.enabled = !!i2223[2]
  i2222.isStatic = !!i2223[3]
  i2222.layer = i2223[4]
  return i2222
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2224 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2225 = data
  i2224.m_hasFontAssetChanged = !!i2225[0]
  request.r(i2225[1], i2225[2], 0, i2224, 'm_baseMaterial')
  i2224.m_maskOffset = new pc.Vec4( i2225[3], i2225[4], i2225[5], i2225[6] )
  i2224.m_text = i2225[7]
  i2224.m_isRightToLeft = !!i2225[8]
  request.r(i2225[9], i2225[10], 0, i2224, 'm_fontAsset')
  request.r(i2225[11], i2225[12], 0, i2224, 'm_sharedMaterial')
  var i2227 = i2225[13]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 2) {
  request.r(i2227[i + 0], i2227[i + 1], 2, i2226, '')
  }
  i2224.m_fontSharedMaterials = i2226
  request.r(i2225[14], i2225[15], 0, i2224, 'm_fontMaterial')
  var i2229 = i2225[16]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 2) {
  request.r(i2229[i + 0], i2229[i + 1], 2, i2228, '')
  }
  i2224.m_fontMaterials = i2228
  i2224.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2225[17], i2225[18], i2225[19], i2225[20])
  i2224.m_fontColor = new pc.Color(i2225[21], i2225[22], i2225[23], i2225[24])
  i2224.m_enableVertexGradient = !!i2225[25]
  i2224.m_colorMode = i2225[26]
  i2224.m_fontColorGradient = request.d('TMPro.VertexGradient', i2225[27], i2224.m_fontColorGradient)
  request.r(i2225[28], i2225[29], 0, i2224, 'm_fontColorGradientPreset')
  request.r(i2225[30], i2225[31], 0, i2224, 'm_spriteAsset')
  i2224.m_tintAllSprites = !!i2225[32]
  request.r(i2225[33], i2225[34], 0, i2224, 'm_StyleSheet')
  i2224.m_TextStyleHashCode = i2225[35]
  i2224.m_overrideHtmlColors = !!i2225[36]
  i2224.m_faceColor = UnityEngine.Color32.ConstructColor(i2225[37], i2225[38], i2225[39], i2225[40])
  i2224.m_fontSize = i2225[41]
  i2224.m_fontSizeBase = i2225[42]
  i2224.m_fontWeight = i2225[43]
  i2224.m_enableAutoSizing = !!i2225[44]
  i2224.m_fontSizeMin = i2225[45]
  i2224.m_fontSizeMax = i2225[46]
  i2224.m_fontStyle = i2225[47]
  i2224.m_HorizontalAlignment = i2225[48]
  i2224.m_VerticalAlignment = i2225[49]
  i2224.m_textAlignment = i2225[50]
  i2224.m_characterSpacing = i2225[51]
  i2224.m_wordSpacing = i2225[52]
  i2224.m_lineSpacing = i2225[53]
  i2224.m_lineSpacingMax = i2225[54]
  i2224.m_paragraphSpacing = i2225[55]
  i2224.m_charWidthMaxAdj = i2225[56]
  i2224.m_enableWordWrapping = !!i2225[57]
  i2224.m_wordWrappingRatios = i2225[58]
  i2224.m_overflowMode = i2225[59]
  request.r(i2225[60], i2225[61], 0, i2224, 'm_linkedTextComponent')
  request.r(i2225[62], i2225[63], 0, i2224, 'parentLinkedComponent')
  i2224.m_enableKerning = !!i2225[64]
  i2224.m_enableExtraPadding = !!i2225[65]
  i2224.checkPaddingRequired = !!i2225[66]
  i2224.m_isRichText = !!i2225[67]
  i2224.m_parseCtrlCharacters = !!i2225[68]
  i2224.m_isOrthographic = !!i2225[69]
  i2224.m_isCullingEnabled = !!i2225[70]
  i2224.m_horizontalMapping = i2225[71]
  i2224.m_verticalMapping = i2225[72]
  i2224.m_uvLineOffset = i2225[73]
  i2224.m_geometrySortingOrder = i2225[74]
  i2224.m_IsTextObjectScaleStatic = !!i2225[75]
  i2224.m_VertexBufferAutoSizeReduction = !!i2225[76]
  i2224.m_useMaxVisibleDescender = !!i2225[77]
  i2224.m_pageToDisplay = i2225[78]
  i2224.m_margin = new pc.Vec4( i2225[79], i2225[80], i2225[81], i2225[82] )
  i2224.m_isUsingLegacyAnimationComponent = !!i2225[83]
  i2224.m_isVolumetricText = !!i2225[84]
  request.r(i2225[85], i2225[86], 0, i2224, 'm_Material')
  i2224.m_Maskable = !!i2225[87]
  i2224.m_Color = new pc.Color(i2225[88], i2225[89], i2225[90], i2225[91])
  i2224.m_RaycastTarget = !!i2225[92]
  i2224.m_RaycastPadding = new pc.Vec4( i2225[93], i2225[94], i2225[95], i2225[96] )
  return i2224
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2232 = root || request.c( 'TMPro.VertexGradient' )
  var i2233 = data
  i2232.topLeft = new pc.Color(i2233[0], i2233[1], i2233[2], i2233[3])
  i2232.topRight = new pc.Color(i2233[4], i2233[5], i2233[6], i2233[7])
  i2232.bottomLeft = new pc.Color(i2233[8], i2233[9], i2233[10], i2233[11])
  i2232.bottomRight = new pc.Color(i2233[12], i2233[13], i2233[14], i2233[15])
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2234 = root || new pc.UnityMaterial()
  var i2235 = data
  i2234.name = i2235[0]
  request.r(i2235[1], i2235[2], 0, i2234, 'shader')
  i2234.renderQueue = i2235[3]
  i2234.enableInstancing = !!i2235[4]
  var i2237 = i2235[5]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2237[i + 0]) );
  }
  i2234.floatParameters = i2236
  var i2239 = i2235[6]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2239[i + 0]) );
  }
  i2234.colorParameters = i2238
  var i2241 = i2235[7]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2241[i + 0]) );
  }
  i2234.vectorParameters = i2240
  var i2243 = i2235[8]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2243[i + 0]) );
  }
  i2234.textureParameters = i2242
  var i2245 = i2235[9]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2245[i + 0]) );
  }
  i2234.materialFlags = i2244
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2249 = data
  i2248.name = i2249[0]
  i2248.value = i2249[1]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2253 = data
  i2252.name = i2253[0]
  i2252.value = new pc.Color(i2253[1], i2253[2], i2253[3], i2253[4])
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2257 = data
  i2256.name = i2257[0]
  i2256.value = new pc.Vec4( i2257[1], i2257[2], i2257[3], i2257[4] )
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2261 = data
  i2260.name = i2261[0]
  request.r(i2261[1], i2261[2], 0, i2260, 'value')
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.enabled = !!i2265[1]
  return i2264
}

Deserializers["TileCell"] = function (request, data, root) {
  var i2266 = root || request.c( 'TileCell' )
  var i2267 = data
  i2266.coordinate = new pc.Vec2( i2267[0], i2267[1] )
  request.r(i2267[2], i2267[3], 0, i2266, 'tileData')
  request.r(i2267[4], i2267[5], 0, i2266, 'tile')
  return i2266
}

Deserializers["Tile"] = function (request, data, root) {
  var i2268 = root || request.c( 'Tile' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'itemImage')
  request.r(i2269[2], i2269[3], 0, i2268, 'tileData')
  i2268.MovementMagnitude = i2269[4]
  i2268.MovementDuration = i2269[5]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2271 = data
  i2270.position = new pc.Vec3( i2271[0], i2271[1], i2271[2] )
  i2270.scale = new pc.Vec3( i2271[3], i2271[4], i2271[5] )
  i2270.rotation = new pc.Quat(i2271[6], i2271[7], i2271[8], i2271[9])
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2273 = data
  i2272.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2273[0], i2272.main)
  i2272.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2273[1], i2272.colorBySpeed)
  i2272.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2273[2], i2272.colorOverLifetime)
  i2272.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2273[3], i2272.emission)
  i2272.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2273[4], i2272.rotationBySpeed)
  i2272.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2273[5], i2272.rotationOverLifetime)
  i2272.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2273[6], i2272.shape)
  i2272.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2273[7], i2272.sizeBySpeed)
  i2272.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2273[8], i2272.sizeOverLifetime)
  i2272.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2273[9], i2272.textureSheetAnimation)
  i2272.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2273[10], i2272.velocityOverLifetime)
  i2272.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2273[11], i2272.noise)
  i2272.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2273[12], i2272.inheritVelocity)
  i2272.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2273[13], i2272.forceOverLifetime)
  i2272.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2273[14], i2272.limitVelocityOverLifetime)
  i2272.useAutoRandomSeed = !!i2273[15]
  i2272.randomSeed = i2273[16]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2274 = root || new pc.ParticleSystemMain()
  var i2275 = data
  i2274.duration = i2275[0]
  i2274.loop = !!i2275[1]
  i2274.prewarm = !!i2275[2]
  i2274.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[3], i2274.startDelay)
  i2274.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[4], i2274.startLifetime)
  i2274.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[5], i2274.startSpeed)
  i2274.startSize3D = !!i2275[6]
  i2274.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[7], i2274.startSizeX)
  i2274.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[8], i2274.startSizeY)
  i2274.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[9], i2274.startSizeZ)
  i2274.startRotation3D = !!i2275[10]
  i2274.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[11], i2274.startRotationX)
  i2274.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[12], i2274.startRotationY)
  i2274.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[13], i2274.startRotationZ)
  i2274.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2275[14], i2274.startColor)
  i2274.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[15], i2274.gravityModifier)
  i2274.simulationSpace = i2275[16]
  request.r(i2275[17], i2275[18], 0, i2274, 'customSimulationSpace')
  i2274.simulationSpeed = i2275[19]
  i2274.useUnscaledTime = !!i2275[20]
  i2274.scalingMode = i2275[21]
  i2274.playOnAwake = !!i2275[22]
  i2274.maxParticles = i2275[23]
  i2274.emitterVelocityMode = i2275[24]
  i2274.stopAction = i2275[25]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2276 = root || new pc.MinMaxCurve()
  var i2277 = data
  i2276.mode = i2277[0]
  i2276.curveMin = new pc.AnimationCurve( { keys_flow: i2277[1] } )
  i2276.curveMax = new pc.AnimationCurve( { keys_flow: i2277[2] } )
  i2276.curveMultiplier = i2277[3]
  i2276.constantMin = i2277[4]
  i2276.constantMax = i2277[5]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2278 = root || new pc.MinMaxGradient()
  var i2279 = data
  i2278.mode = i2279[0]
  i2278.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2279[1], i2278.gradientMin)
  i2278.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2279[2], i2278.gradientMax)
  i2278.colorMin = new pc.Color(i2279[3], i2279[4], i2279[5], i2279[6])
  i2278.colorMax = new pc.Color(i2279[7], i2279[8], i2279[9], i2279[10])
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2281 = data
  i2280.mode = i2281[0]
  var i2283 = i2281[1]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2283[i + 0]) );
  }
  i2280.colorKeys = i2282
  var i2285 = i2281[2]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2285[i + 0]) );
  }
  i2280.alphaKeys = i2284
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2286 = root || new pc.ParticleSystemColorBySpeed()
  var i2287 = data
  i2286.enabled = !!i2287[0]
  i2286.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2287[1], i2286.color)
  i2286.range = new pc.Vec2( i2287[2], i2287[3] )
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2291 = data
  i2290.color = new pc.Color(i2291[0], i2291[1], i2291[2], i2291[3])
  i2290.time = i2291[4]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2295 = data
  i2294.alpha = i2295[0]
  i2294.time = i2295[1]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2296 = root || new pc.ParticleSystemColorOverLifetime()
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2297[1], i2296.color)
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2298 = root || new pc.ParticleSystemEmitter()
  var i2299 = data
  i2298.enabled = !!i2299[0]
  i2298.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[1], i2298.rateOverTime)
  i2298.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[2], i2298.rateOverDistance)
  var i2301 = i2299[3]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2301[i + 0]) );
  }
  i2298.bursts = i2300
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemBurst()
  var i2305 = data
  i2304.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[0], i2304.count)
  i2304.cycleCount = i2305[1]
  i2304.minCount = i2305[2]
  i2304.maxCount = i2305[3]
  i2304.repeatInterval = i2305[4]
  i2304.time = i2305[5]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2306 = root || new pc.ParticleSystemRotationBySpeed()
  var i2307 = data
  i2306.enabled = !!i2307[0]
  i2306.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[1], i2306.x)
  i2306.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[2], i2306.y)
  i2306.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[3], i2306.z)
  i2306.separateAxes = !!i2307[4]
  i2306.range = new pc.Vec2( i2307[5], i2307[6] )
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2308 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2309 = data
  i2308.enabled = !!i2309[0]
  i2308.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[1], i2308.x)
  i2308.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[2], i2308.y)
  i2308.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[3], i2308.z)
  i2308.separateAxes = !!i2309[4]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2310 = root || new pc.ParticleSystemShape()
  var i2311 = data
  i2310.enabled = !!i2311[0]
  i2310.shapeType = i2311[1]
  i2310.randomDirectionAmount = i2311[2]
  i2310.sphericalDirectionAmount = i2311[3]
  i2310.randomPositionAmount = i2311[4]
  i2310.alignToDirection = !!i2311[5]
  i2310.radius = i2311[6]
  i2310.radiusMode = i2311[7]
  i2310.radiusSpread = i2311[8]
  i2310.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[9], i2310.radiusSpeed)
  i2310.radiusThickness = i2311[10]
  i2310.angle = i2311[11]
  i2310.length = i2311[12]
  i2310.boxThickness = new pc.Vec3( i2311[13], i2311[14], i2311[15] )
  i2310.meshShapeType = i2311[16]
  request.r(i2311[17], i2311[18], 0, i2310, 'mesh')
  request.r(i2311[19], i2311[20], 0, i2310, 'meshRenderer')
  request.r(i2311[21], i2311[22], 0, i2310, 'skinnedMeshRenderer')
  i2310.useMeshMaterialIndex = !!i2311[23]
  i2310.meshMaterialIndex = i2311[24]
  i2310.useMeshColors = !!i2311[25]
  i2310.normalOffset = i2311[26]
  i2310.arc = i2311[27]
  i2310.arcMode = i2311[28]
  i2310.arcSpread = i2311[29]
  i2310.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[30], i2310.arcSpeed)
  i2310.donutRadius = i2311[31]
  i2310.position = new pc.Vec3( i2311[32], i2311[33], i2311[34] )
  i2310.rotation = new pc.Vec3( i2311[35], i2311[36], i2311[37] )
  i2310.scale = new pc.Vec3( i2311[38], i2311[39], i2311[40] )
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2312 = root || new pc.ParticleSystemSizeBySpeed()
  var i2313 = data
  i2312.enabled = !!i2313[0]
  i2312.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[1], i2312.x)
  i2312.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[2], i2312.y)
  i2312.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[3], i2312.z)
  i2312.separateAxes = !!i2313[4]
  i2312.range = new pc.Vec2( i2313[5], i2313[6] )
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2314 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2315 = data
  i2314.enabled = !!i2315[0]
  i2314.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[1], i2314.x)
  i2314.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[2], i2314.y)
  i2314.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[3], i2314.z)
  i2314.separateAxes = !!i2315[4]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2316 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2317 = data
  i2316.enabled = !!i2317[0]
  i2316.mode = i2317[1]
  i2316.animation = i2317[2]
  i2316.numTilesX = i2317[3]
  i2316.numTilesY = i2317[4]
  i2316.useRandomRow = !!i2317[5]
  i2316.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[6], i2316.frameOverTime)
  i2316.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[7], i2316.startFrame)
  i2316.cycleCount = i2317[8]
  i2316.rowIndex = i2317[9]
  i2316.flipU = i2317[10]
  i2316.flipV = i2317[11]
  i2316.spriteCount = i2317[12]
  var i2319 = i2317[13]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 2) {
  request.r(i2319[i + 0], i2319[i + 1], 2, i2318, '')
  }
  i2316.sprites = i2318
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2322 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2323 = data
  i2322.enabled = !!i2323[0]
  i2322.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[1], i2322.x)
  i2322.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[2], i2322.y)
  i2322.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[3], i2322.z)
  i2322.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[4], i2322.radial)
  i2322.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[5], i2322.speedModifier)
  i2322.space = i2323[6]
  i2322.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[7], i2322.orbitalX)
  i2322.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[8], i2322.orbitalY)
  i2322.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[9], i2322.orbitalZ)
  i2322.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[10], i2322.orbitalOffsetX)
  i2322.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[11], i2322.orbitalOffsetY)
  i2322.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[12], i2322.orbitalOffsetZ)
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2324 = root || new pc.ParticleSystemNoise()
  var i2325 = data
  i2324.enabled = !!i2325[0]
  i2324.separateAxes = !!i2325[1]
  i2324.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[2], i2324.strengthX)
  i2324.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[3], i2324.strengthY)
  i2324.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[4], i2324.strengthZ)
  i2324.frequency = i2325[5]
  i2324.damping = !!i2325[6]
  i2324.octaveCount = i2325[7]
  i2324.octaveMultiplier = i2325[8]
  i2324.octaveScale = i2325[9]
  i2324.quality = i2325[10]
  i2324.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[11], i2324.scrollSpeed)
  i2324.scrollSpeedMultiplier = i2325[12]
  i2324.remapEnabled = !!i2325[13]
  i2324.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[14], i2324.remapX)
  i2324.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[15], i2324.remapY)
  i2324.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[16], i2324.remapZ)
  i2324.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[17], i2324.positionAmount)
  i2324.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[18], i2324.rotationAmount)
  i2324.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[19], i2324.sizeAmount)
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2326 = root || new pc.ParticleSystemInheritVelocity()
  var i2327 = data
  i2326.enabled = !!i2327[0]
  i2326.mode = i2327[1]
  i2326.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[2], i2326.curve)
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2328 = root || new pc.ParticleSystemForceOverLifetime()
  var i2329 = data
  i2328.enabled = !!i2329[0]
  i2328.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[1], i2328.x)
  i2328.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[2], i2328.y)
  i2328.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[3], i2328.z)
  i2328.space = i2329[4]
  i2328.randomized = !!i2329[5]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2330 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2331 = data
  i2330.enabled = !!i2331[0]
  i2330.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[1], i2330.limit)
  i2330.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[2], i2330.limitX)
  i2330.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[3], i2330.limitY)
  i2330.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[4], i2330.limitZ)
  i2330.dampen = i2331[5]
  i2330.separateAxes = !!i2331[6]
  i2330.space = i2331[7]
  i2330.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[8], i2330.drag)
  i2330.multiplyDragByParticleSize = !!i2331[9]
  i2330.multiplyDragByParticleVelocity = !!i2331[10]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2333 = data
  i2332.enabled = !!i2333[0]
  request.r(i2333[1], i2333[2], 0, i2332, 'sharedMaterial')
  var i2335 = i2333[3]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 2) {
  request.r(i2335[i + 0], i2335[i + 1], 2, i2334, '')
  }
  i2332.sharedMaterials = i2334
  i2332.receiveShadows = !!i2333[4]
  i2332.shadowCastingMode = i2333[5]
  i2332.sortingLayerID = i2333[6]
  i2332.sortingOrder = i2333[7]
  i2332.lightmapIndex = i2333[8]
  i2332.lightmapSceneIndex = i2333[9]
  i2332.lightmapScaleOffset = new pc.Vec4( i2333[10], i2333[11], i2333[12], i2333[13] )
  i2332.lightProbeUsage = i2333[14]
  i2332.reflectionProbeUsage = i2333[15]
  request.r(i2333[16], i2333[17], 0, i2332, 'mesh')
  i2332.meshCount = i2333[18]
  i2332.activeVertexStreamsCount = i2333[19]
  i2332.alignment = i2333[20]
  i2332.renderMode = i2333[21]
  i2332.sortMode = i2333[22]
  i2332.lengthScale = i2333[23]
  i2332.velocityScale = i2333[24]
  i2332.cameraVelocityScale = i2333[25]
  i2332.normalDirection = i2333[26]
  i2332.sortingFudge = i2333[27]
  i2332.minParticleSize = i2333[28]
  i2332.maxParticleSize = i2333[29]
  i2332.pivot = new pc.Vec3( i2333[30], i2333[31], i2333[32] )
  request.r(i2333[33], i2333[34], 0, i2332, 'trailMaterial')
  return i2332
}

Deserializers["CartoonFX.CFXR_Effect"] = function (request, data, root) {
  var i2336 = root || request.c( 'CartoonFX.CFXR_Effect' )
  var i2337 = data
  i2336.clearBehavior = i2337[0]
  i2336.cameraShake = request.d('CartoonFX.CFXR_Effect+CameraShake', i2337[1], i2336.cameraShake)
  var i2339 = i2337[2]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('CartoonFX.CFXR_Effect+AnimatedLight', i2339[i + 0]) );
  }
  i2336.animatedLights = i2338
  request.r(i2337[3], i2337[4], 0, i2336, 'fadeOutReference')
  return i2336
}

Deserializers["CartoonFX.CFXR_Effect+CameraShake"] = function (request, data, root) {
  var i2340 = root || request.c( 'CartoonFX.CFXR_Effect+CameraShake' )
  var i2341 = data
  i2340.camEnabled = !!i2341[0]
  i2340.useMainCamera = !!i2341[1]
  var i2343 = i2341[2]
  var i2342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 1, i2342, '')
  }
  i2340.cameras = i2342
  i2340.delay = i2341[3]
  i2340.duration = i2341[4]
  i2340.shakeSpace = i2341[5]
  i2340.shakeStrength = new pc.Vec3( i2341[6], i2341[7], i2341[8] )
  i2340.shakeCurve = new pc.AnimationCurve( { keys_flow: i2341[9] } )
  i2340.shakesDelay = i2341[10]
  return i2340
}

Deserializers["CartoonFX.CFXR_Effect+AnimatedLight"] = function (request, data, root) {
  var i2348 = root || request.c( 'CartoonFX.CFXR_Effect+AnimatedLight' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'light')
  i2348.loop = !!i2349[2]
  i2348.animateIntensity = !!i2349[3]
  i2348.intensityStart = i2349[4]
  i2348.intensityEnd = i2349[5]
  i2348.intensityDuration = i2349[6]
  i2348.intensityCurve = new pc.AnimationCurve( { keys_flow: i2349[7] } )
  i2348.perlinIntensity = !!i2349[8]
  i2348.perlinIntensitySpeed = i2349[9]
  i2348.fadeIn = !!i2349[10]
  i2348.fadeInDuration = i2349[11]
  i2348.fadeOut = !!i2349[12]
  i2348.fadeOutDuration = i2349[13]
  i2348.animateRange = !!i2349[14]
  i2348.rangeStart = i2349[15]
  i2348.rangeEnd = i2349[16]
  i2348.rangeDuration = i2349[17]
  i2348.rangeCurve = new pc.AnimationCurve( { keys_flow: i2349[18] } )
  i2348.perlinRange = !!i2349[19]
  i2348.perlinRangeSpeed = i2349[20]
  i2348.animateColor = !!i2349[21]
  i2348.colorGradient = i2349[22] ? new pc.ColorGradient(i2349[22][0], i2349[22][1], i2349[22][2]) : null
  i2348.colorDuration = i2349[23]
  i2348.colorCurve = new pc.AnimationCurve( { keys_flow: i2349[24] } )
  i2348.perlinColor = !!i2349[25]
  i2348.perlinColorSpeed = i2349[26]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2351 = data
  i2350.enabled = !!i2351[0]
  i2350.type = i2351[1]
  i2350.color = new pc.Color(i2351[2], i2351[3], i2351[4], i2351[5])
  i2350.cullingMask = i2351[6]
  i2350.intensity = i2351[7]
  i2350.range = i2351[8]
  i2350.spotAngle = i2351[9]
  i2350.shadows = i2351[10]
  i2350.shadowNormalBias = i2351[11]
  i2350.shadowBias = i2351[12]
  i2350.shadowStrength = i2351[13]
  i2350.shadowResolution = i2351[14]
  i2350.lightmapBakeType = i2351[15]
  i2350.renderMode = i2351[16]
  request.r(i2351[17], i2351[18], 0, i2350, 'cookie')
  i2350.cookieSize = i2351[19]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2353 = data
  i2352.name = i2353[0]
  i2352.halfPrecision = !!i2353[1]
  i2352.useUInt32IndexFormat = !!i2353[2]
  i2352.vertexCount = i2353[3]
  i2352.aabb = i2353[4]
  var i2355 = i2353[5]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( !!i2355[i + 0] );
  }
  i2352.streams = i2354
  i2352.vertices = i2353[6]
  var i2357 = i2353[7]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2357[i + 0]) );
  }
  i2352.subMeshes = i2356
  var i2359 = i2353[8]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 16) {
    i2358.push( new pc.Mat4().setData(i2359[i + 0], i2359[i + 1], i2359[i + 2], i2359[i + 3],  i2359[i + 4], i2359[i + 5], i2359[i + 6], i2359[i + 7],  i2359[i + 8], i2359[i + 9], i2359[i + 10], i2359[i + 11],  i2359[i + 12], i2359[i + 13], i2359[i + 14], i2359[i + 15]) );
  }
  i2352.bindposes = i2358
  var i2361 = i2353[9]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2361[i + 0]) );
  }
  i2352.blendShapes = i2360
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2367 = data
  i2366.triangles = i2367[0]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2373 = data
  i2372.name = i2373[0]
  var i2375 = i2373[1]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2375[i + 0]) );
  }
  i2372.frames = i2374
  return i2372
}

Deserializers["AnimatedTile"] = function (request, data, root) {
  var i2376 = root || request.c( 'AnimatedTile' )
  var i2377 = data
  i2376.Duration = i2377[0]
  request.r(i2377[1], i2377[2], 0, i2376, 'tileData')
  var i2379 = i2377[3]
  var i2378 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2379.length; i += 3) {
    i2378.add(new pc.Vec3( i2379[i + 0], i2379[i + 1], i2379[i + 2] ));
  }
  i2376.targetPos = i2378
  var i2381 = i2377[4]
  var i2380 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2381.length; i += 3) {
    i2380.add(new pc.Vec3( i2381[i + 0], i2381[i + 1], i2381[i + 2] ));
  }
  i2376.targetPosPortrait = i2380
  var i2383 = i2377[5]
  var i2382 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2383.length; i += 3) {
    i2382.add(new pc.Vec3( i2383[i + 0], i2383[i + 1], i2383[i + 2] ));
  }
  i2376.targetPosLandscape = i2382
  var i2385 = i2377[6]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.add(i2385[i + 0]);
  }
  i2376.targets = i2384
  request.r(i2377[7], i2377[8], 0, i2376, 'image')
  var i2387 = i2377[9]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 1, i2386, '')
  }
  i2376.vfxParticles = i2386
  request.r(i2377[10], i2377[11], 0, i2376, 'trailVFXPrefab')
  request.r(i2377[12], i2377[13], 0, i2376, 'circleTrailVFXPrefab')
  request.r(i2377[14], i2377[15], 0, i2376, 'trailRenderer')
  return i2376
}

Deserializers["StateEvents"] = function (request, data, root) {
  var i2394 = root || request.c( 'StateEvents' )
  var i2395 = data
  i2394.OnEnableEvent = request.d('UnityEngine.Events.UnityEvent', i2395[0], i2394.OnEnableEvent)
  i2394.OnDisableEvent = request.d('UnityEngine.Events.UnityEvent', i2395[1], i2394.OnDisableEvent)
  i2394.OnStartEvent = request.d('UnityEngine.Events.UnityEvent', i2395[2], i2394.OnStartEvent)
  i2394.autoEnable = !!i2395[3]
  i2394.autoEnableDelay = i2395[4]
  i2394.autoDisableDelay = i2395[5]
  return i2394
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2397 = data
  i2396.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2397[0], i2396.m_PersistentCalls)
  return i2396
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2399 = data
  var i2401 = i2399[0]
  var i2400 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.add(request.d('UnityEngine.Events.PersistentCall', i2401[i + 0]));
  }
  i2398.m_Calls = i2400
  return i2398
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'm_Target')
  i2404.m_TargetAssemblyTypeName = i2405[2]
  i2404.m_MethodName = i2405[3]
  i2404.m_Mode = i2405[4]
  i2404.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2405[5], i2404.m_Arguments)
  i2404.m_CallState = i2405[6]
  return i2404
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'm_ObjectArgument')
  i2406.m_ObjectArgumentAssemblyTypeName = i2407[2]
  i2406.m_IntArgument = i2407[3]
  i2406.m_FloatArgument = i2407[4]
  i2406.m_StringArgument = i2407[5]
  i2406.m_BoolArgument = !!i2407[6]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2409 = data
  i2408.enabled = !!i2409[0]
  request.r(i2409[1], i2409[2], 0, i2408, 'sharedMaterial')
  var i2411 = i2409[3]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 2) {
  request.r(i2411[i + 0], i2411[i + 1], 2, i2410, '')
  }
  i2408.sharedMaterials = i2410
  i2408.receiveShadows = !!i2409[4]
  i2408.shadowCastingMode = i2409[5]
  i2408.sortingLayerID = i2409[6]
  i2408.sortingOrder = i2409[7]
  i2408.lightmapIndex = i2409[8]
  i2408.lightmapSceneIndex = i2409[9]
  i2408.lightmapScaleOffset = new pc.Vec4( i2409[10], i2409[11], i2409[12], i2409[13] )
  i2408.lightProbeUsage = i2409[14]
  i2408.reflectionProbeUsage = i2409[15]
  var i2413 = i2409[16]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 3) {
    i2412.push( new pc.Vec3( i2413[i + 0], i2413[i + 1], i2413[i + 2] ) );
  }
  i2408.positions = i2412
  i2408.positionCount = i2409[17]
  i2408.time = i2409[18]
  i2408.startWidth = i2409[19]
  i2408.endWidth = i2409[20]
  i2408.widthMultiplier = i2409[21]
  i2408.autodestruct = !!i2409[22]
  i2408.emitting = !!i2409[23]
  i2408.numCornerVertices = i2409[24]
  i2408.numCapVertices = i2409[25]
  i2408.minVertexDistance = i2409[26]
  i2408.colorGradient = i2409[27] ? new pc.ColorGradient(i2409[27][0], i2409[27][1], i2409[27][2]) : null
  i2408.startColor = new pc.Color(i2409[28], i2409[29], i2409[30], i2409[31])
  i2408.endColor = new pc.Color(i2409[32], i2409[33], i2409[34], i2409[35])
  i2408.generateLightingData = !!i2409[36]
  i2408.textureMode = i2409[37]
  i2408.alignment = i2409[38]
  i2408.widthCurve = new pc.AnimationCurve( { keys_flow: i2409[39] } )
  return i2408
}

Deserializers["PositionTracking"] = function (request, data, root) {
  var i2416 = root || request.c( 'PositionTracking' )
  var i2417 = data
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2419 = data
  i2418.name = i2419[0]
  i2418.index = i2419[1]
  i2418.startup = !!i2419[2]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2421 = data
  i2420.enabled = !!i2421[0]
  i2420.aspect = i2421[1]
  i2420.orthographic = !!i2421[2]
  i2420.orthographicSize = i2421[3]
  i2420.backgroundColor = new pc.Color(i2421[4], i2421[5], i2421[6], i2421[7])
  i2420.nearClipPlane = i2421[8]
  i2420.farClipPlane = i2421[9]
  i2420.fieldOfView = i2421[10]
  i2420.depth = i2421[11]
  i2420.clearFlags = i2421[12]
  i2420.cullingMask = i2421[13]
  i2420.rect = i2421[14]
  request.r(i2421[15], i2421[16], 0, i2420, 'targetTexture')
  i2420.usePhysicalProperties = !!i2421[17]
  i2420.focalLength = i2421[18]
  i2420.sensorSize = new pc.Vec2( i2421[19], i2421[20] )
  i2420.lensShift = new pc.Vec2( i2421[21], i2421[22] )
  i2420.gateFit = i2421[23]
  i2420.commandBufferCount = i2421[24]
  i2420.cameraType = i2421[25]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2423 = data
  i2422.enabled = !!i2423[0]
  i2422.planeDistance = i2423[1]
  i2422.referencePixelsPerUnit = i2423[2]
  i2422.isFallbackOverlay = !!i2423[3]
  i2422.renderMode = i2423[4]
  i2422.renderOrder = i2423[5]
  i2422.sortingLayerName = i2423[6]
  i2422.sortingOrder = i2423[7]
  i2422.scaleFactor = i2423[8]
  request.r(i2423[9], i2423[10], 0, i2422, 'worldCamera')
  i2422.overrideSorting = !!i2423[11]
  i2422.pixelPerfect = !!i2423[12]
  i2422.targetDisplay = i2423[13]
  i2422.overridePixelPerfect = !!i2423[14]
  return i2422
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2425 = data
  i2424.m_UiScaleMode = i2425[0]
  i2424.m_ReferencePixelsPerUnit = i2425[1]
  i2424.m_ScaleFactor = i2425[2]
  i2424.m_ReferenceResolution = new pc.Vec2( i2425[3], i2425[4] )
  i2424.m_ScreenMatchMode = i2425[5]
  i2424.m_MatchWidthOrHeight = i2425[6]
  i2424.m_PhysicalUnit = i2425[7]
  i2424.m_FallbackScreenDPI = i2425[8]
  i2424.m_DefaultSpriteDPI = i2425[9]
  i2424.m_DynamicPixelsPerUnit = i2425[10]
  i2424.m_PresetInfoIsWorld = !!i2425[11]
  return i2424
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2427 = data
  i2426.m_IgnoreReversedGraphics = !!i2427[0]
  i2426.m_BlockingObjects = i2427[1]
  i2426.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2427[2] )
  return i2426
}

Deserializers["BasicFade"] = function (request, data, root) {
  var i2428 = root || request.c( 'BasicFade' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'canvasGroup')
  i2428.duration = i2429[2]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2431 = data
  i2430.m_Alpha = i2431[0]
  i2430.m_Interactable = !!i2431[1]
  i2430.m_BlocksRaycasts = !!i2431[2]
  i2430.m_IgnoreParentGroups = !!i2431[3]
  i2430.enabled = !!i2431[4]
  return i2430
}

Deserializers["AppearAnimation"] = function (request, data, root) {
  var i2432 = root || request.c( 'AppearAnimation' )
  var i2433 = data
  i2432.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i2433[0], i2432.OnMovementComplete)
  i2432.fadeInDuration = i2433[1]
  i2432.fadeInDelay = i2433[2]
  i2432.fillDuration = i2433[3]
  i2432.fillDelay = i2433[4]
  i2432.targetFillAmount = i2433[5]
  i2432.initialFillAmount = i2433[6]
  return i2432
}

Deserializers["PlayerGuide"] = function (request, data, root) {
  var i2434 = root || request.c( 'PlayerGuide' )
  var i2435 = data
  var i2437 = i2435[0]
  var i2436 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 1, i2436, '')
  }
  i2434.prompts = i2436
  return i2434
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.UI.Button' )
  var i2441 = data
  i2440.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2441[0], i2440.m_OnClick)
  i2440.m_Navigation = request.d('UnityEngine.UI.Navigation', i2441[1], i2440.m_Navigation)
  i2440.m_Transition = i2441[2]
  i2440.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2441[3], i2440.m_Colors)
  i2440.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2441[4], i2440.m_SpriteState)
  i2440.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2441[5], i2440.m_AnimationTriggers)
  i2440.m_Interactable = !!i2441[6]
  request.r(i2441[7], i2441[8], 0, i2440, 'm_TargetGraphic')
  return i2440
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2442 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2443 = data
  i2442.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2443[0], i2442.m_PersistentCalls)
  return i2442
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2444 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2445 = data
  i2444.m_Mode = i2445[0]
  i2444.m_WrapAround = !!i2445[1]
  request.r(i2445[2], i2445[3], 0, i2444, 'm_SelectOnUp')
  request.r(i2445[4], i2445[5], 0, i2444, 'm_SelectOnDown')
  request.r(i2445[6], i2445[7], 0, i2444, 'm_SelectOnLeft')
  request.r(i2445[8], i2445[9], 0, i2444, 'm_SelectOnRight')
  return i2444
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2446 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2447 = data
  i2446.m_NormalColor = new pc.Color(i2447[0], i2447[1], i2447[2], i2447[3])
  i2446.m_HighlightedColor = new pc.Color(i2447[4], i2447[5], i2447[6], i2447[7])
  i2446.m_PressedColor = new pc.Color(i2447[8], i2447[9], i2447[10], i2447[11])
  i2446.m_SelectedColor = new pc.Color(i2447[12], i2447[13], i2447[14], i2447[15])
  i2446.m_DisabledColor = new pc.Color(i2447[16], i2447[17], i2447[18], i2447[19])
  i2446.m_ColorMultiplier = i2447[20]
  i2446.m_FadeDuration = i2447[21]
  return i2446
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2448 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'm_HighlightedSprite')
  request.r(i2449[2], i2449[3], 0, i2448, 'm_PressedSprite')
  request.r(i2449[4], i2449[5], 0, i2448, 'm_SelectedSprite')
  request.r(i2449[6], i2449[7], 0, i2448, 'm_DisabledSprite')
  return i2448
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2450 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2451 = data
  i2450.m_NormalTrigger = i2451[0]
  i2450.m_HighlightedTrigger = i2451[1]
  i2450.m_PressedTrigger = i2451[2]
  i2450.m_SelectedTrigger = i2451[3]
  i2450.m_DisabledTrigger = i2451[4]
  return i2450
}

Deserializers["RectAnimator"] = function (request, data, root) {
  var i2452 = root || request.c( 'RectAnimator' )
  var i2453 = data
  request.r(i2453[0], i2453[1], 0, i2452, 'rectTransform')
  i2452.animateScale = !!i2453[2]
  i2452.isScaleLooping = !!i2453[3]
  i2452.scaleTo = i2453[4]
  i2452.scaleDuration = i2453[5]
  i2452.scaleEaseType = i2453[6]
  i2452.scaleStartDelay = i2453[7]
  i2452.animateMove = !!i2453[8]
  i2452.isMoveLooping = !!i2453[9]
  i2452.moveTo = new pc.Vec2( i2453[10], i2453[11] )
  i2452.moveDuration = i2453[12]
  i2452.moveEaseType = i2453[13]
  i2452.moveLoopType = i2453[14]
  i2452.moveStartDelay = i2453[15]
  i2452.initialPos = new pc.Vec3( i2453[16], i2453[17], i2453[18] )
  i2452.initialScale = new pc.Vec3( i2453[19], i2453[20], i2453[21] )
  return i2452
}

Deserializers["TileManager"] = function (request, data, root) {
  var i2454 = root || request.c( 'TileManager' )
  var i2455 = data
  i2454.cellWidth = i2455[0]
  i2454.cellHeight = i2455[1]
  request.r(i2455[2], i2455[3], 0, i2454, 'canvasGroup')
  var i2457 = i2455[4]
  var i2456 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i2457.length; i += 2) {
  request.r(i2457[i + 0], i2457[i + 1], 1, i2456, '')
  }
  i2454.cells = i2456
  var i2459 = i2455[5]
  var i2458 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i2459.length; i += 2) {
  request.r(i2459[i + 0], i2459[i + 1], 1, i2458, '')
  }
  i2454.tileDataPool = i2458
  i2454.GridHeight = i2455[6]
  i2454.SequenceDelay = i2455[7]
  i2454.BreakDelay = i2455[8]
  i2454.FallDelay = i2455[9]
  i2454.CheckDelay = i2455[10]
  i2454.levelColorValues = i2455[11]
  var i2461 = i2455[12]
  var i2460 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i2461.length; i += 2) {
  request.r(i2461[i + 0], i2461[i + 1], 1, i2460, '')
  }
  i2454.powerupDataPool = i2460
  request.r(i2455[13], i2455[14], 0, i2454, 'dynamitePowerup')
  return i2454
}

Deserializers["SpecialTileManager"] = function (request, data, root) {
  var i2466 = root || request.c( 'SpecialTileManager' )
  var i2467 = data
  request.r(i2467[0], i2467[1], 0, i2466, 'tileManager')
  var i2469 = i2467[2]
  var i2468 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i2469.length; i += 2) {
  request.r(i2469[i + 0], i2469[i + 1], 1, i2468, '')
  }
  i2466.cellList = i2468
  return i2466
}

Deserializers["TransformOrientation"] = function (request, data, root) {
  var i2470 = root || request.c( 'TransformOrientation' )
  var i2471 = data
  i2470._objectSwapMode = !!i2471[0]
  request.r(i2471[1], i2471[2], 0, i2470, '_portraitObject')
  request.r(i2471[3], i2471[4], 0, i2470, '_landscapeObject')
  i2470._orientationSettings = request.d('TransformOrientation+RectTransformOrientationSettings', i2471[5], i2470._orientationSettings)
  return i2470
}

Deserializers["TransformOrientation+RectTransformOrientationSettings"] = function (request, data, root) {
  var i2472 = root || request.c( 'TransformOrientation+RectTransformOrientationSettings' )
  var i2473 = data
  i2472.PortraitValues = request.d('TransformOrientation+RectTransformValues', i2473[0], i2472.PortraitValues)
  i2472.LandscapeValues = request.d('TransformOrientation+RectTransformValues', i2473[1], i2472.LandscapeValues)
  return i2472
}

Deserializers["TransformOrientation+RectTransformValues"] = function (request, data, root) {
  var i2474 = root || request.c( 'TransformOrientation+RectTransformValues' )
  var i2475 = data
  i2474.AnchoredPosition = new pc.Vec2( i2475[0], i2475[1] )
  i2474.SizeDelta = new pc.Vec2( i2475[2], i2475[3] )
  i2474.Scale = new pc.Vec3( i2475[4], i2475[5], i2475[6] )
  return i2474
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2476 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2477 = data
  i2476.m_Spacing = i2477[0]
  i2476.m_ChildForceExpandWidth = !!i2477[1]
  i2476.m_ChildForceExpandHeight = !!i2477[2]
  i2476.m_ChildControlWidth = !!i2477[3]
  i2476.m_ChildControlHeight = !!i2477[4]
  i2476.m_ChildScaleWidth = !!i2477[5]
  i2476.m_ChildScaleHeight = !!i2477[6]
  i2476.m_ReverseArrangement = !!i2477[7]
  i2476.m_Padding = UnityEngine.RectOffset.FromPaddings(i2477[8], i2477[9], i2477[10], i2477[11])
  i2476.m_ChildAlignment = i2477[12]
  return i2476
}

Deserializers["UIMoveTo"] = function (request, data, root) {
  var i2478 = root || request.c( 'UIMoveTo' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'imageTransform')
  i2478.targetPosition = new pc.Vec2( i2479[2], i2479[3] )
  i2478.anticipationOffset = i2479[4]
  i2478.duration = i2479[5]
  i2478.enableOnStart = !!i2479[6]
  i2478.delayBeforeStart = i2479[7]
  i2478.delayBeforeEnd = i2479[8]
  i2478.OnMovementStart = request.d('UnityEngine.Events.UnityEvent', i2479[9], i2478.OnMovementStart)
  i2478.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i2479[10], i2478.OnMovementComplete)
  var i2481 = i2479[11]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2481.length; i += 2) {
  request.r(i2481[i + 0], i2481[i + 1], 1, i2480, '')
  }
  i2478.objectsToEnable = i2480
  return i2478
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i2482 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i2483 = data
  i2482.m_StartCorner = i2483[0]
  i2482.m_StartAxis = i2483[1]
  i2482.m_CellSize = new pc.Vec2( i2483[2], i2483[3] )
  i2482.m_Spacing = new pc.Vec2( i2483[4], i2483[5] )
  i2482.m_Constraint = i2483[6]
  i2482.m_ConstraintCount = i2483[7]
  i2482.m_Padding = UnityEngine.RectOffset.FromPaddings(i2483[8], i2483[9], i2483[10], i2483[11])
  i2482.m_ChildAlignment = i2483[12]
  return i2482
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2484 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2485 = data
  i2484.m_ShowMaskGraphic = !!i2485[0]
  return i2484
}

Deserializers["AnimatedTileSpawner"] = function (request, data, root) {
  var i2486 = root || request.c( 'AnimatedTileSpawner' )
  var i2487 = data
  var i2489 = i2487[0]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatedTile')))
  for(var i = 0; i < i2489.length; i += 2) {
  request.r(i2489[i + 0], i2489[i + 1], 1, i2488, '')
  }
  i2486.tiles = i2488
  return i2486
}

Deserializers["DynamiteEffect"] = function (request, data, root) {
  var i2492 = root || request.c( 'DynamiteEffect' )
  var i2493 = data
  i2492.initialScale = new pc.Vec3( i2493[0], i2493[1], i2493[2] )
  i2492.targetPos = new pc.Vec3( i2493[3], i2493[4], i2493[5] )
  i2492.duration = i2493[6]
  request.r(i2493[7], i2493[8], 0, i2492, 'model')
  request.r(i2493[9], i2493[10], 0, i2492, 'explosionEffectPrefab')
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2495 = data
  i2494.enabled = !!i2495[0]
  request.r(i2495[1], i2495[2], 0, i2494, 'sharedMaterial')
  var i2497 = i2495[3]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 2) {
  request.r(i2497[i + 0], i2497[i + 1], 2, i2496, '')
  }
  i2494.sharedMaterials = i2496
  i2494.receiveShadows = !!i2495[4]
  i2494.shadowCastingMode = i2495[5]
  i2494.sortingLayerID = i2495[6]
  i2494.sortingOrder = i2495[7]
  i2494.lightmapIndex = i2495[8]
  i2494.lightmapSceneIndex = i2495[9]
  i2494.lightmapScaleOffset = new pc.Vec4( i2495[10], i2495[11], i2495[12], i2495[13] )
  i2494.lightProbeUsage = i2495[14]
  i2494.reflectionProbeUsage = i2495[15]
  i2494.color = new pc.Color(i2495[16], i2495[17], i2495[18], i2495[19])
  request.r(i2495[20], i2495[21], 0, i2494, 'sprite')
  i2494.flipX = !!i2495[22]
  i2494.flipY = !!i2495[23]
  i2494.drawMode = i2495[24]
  i2494.size = new pc.Vec2( i2495[25], i2495[26] )
  i2494.tileMode = i2495[27]
  i2494.adaptiveModeThreshold = i2495[28]
  i2494.maskInteraction = i2495[29]
  i2494.spriteSortPoint = i2495[30]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'animatorController')
  request.r(i2499[2], i2499[3], 0, i2498, 'avatar')
  i2498.updateMode = i2499[4]
  i2498.hasTransformHierarchy = !!i2499[5]
  i2498.applyRootMotion = !!i2499[6]
  var i2501 = i2499[7]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 2) {
  request.r(i2501[i + 0], i2501[i + 1], 2, i2500, '')
  }
  i2498.humanBones = i2500
  i2498.enabled = !!i2499[8]
  return i2498
}

Deserializers["MergeHands"] = function (request, data, root) {
  var i2504 = root || request.c( 'MergeHands' )
  var i2505 = data
  request.r(i2505[0], i2505[1], 0, i2504, 'rectTransform')
  request.r(i2505[2], i2505[3], 0, i2504, 'target1')
  request.r(i2505[4], i2505[5], 0, i2504, 'target2')
  return i2504
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2507 = data
  request.r(i2507[0], i2507[1], 0, i2506, 'm_FirstSelected')
  i2506.m_sendNavigationEvents = !!i2507[2]
  i2506.m_DragThreshold = i2507[3]
  return i2506
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2509 = data
  i2508.m_HorizontalAxis = i2509[0]
  i2508.m_VerticalAxis = i2509[1]
  i2508.m_SubmitButton = i2509[2]
  i2508.m_CancelButton = i2509[3]
  i2508.m_InputActionsPerSecond = i2509[4]
  i2508.m_RepeatDelay = i2509[5]
  i2508.m_ForceModuleActive = !!i2509[6]
  i2508.m_SendPointerHoverToParent = !!i2509[7]
  return i2508
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2510 = root || request.c( 'GameManager' )
  var i2511 = data
  i2510.IsSIP = !!i2511[0]
  i2510.gameType = i2511[1]
  i2510.toggleInactivityPanel = !!i2511[2]
  i2510.OnStartMIP1 = request.d('UnityEngine.Events.UnityEvent', i2511[3], i2510.OnStartMIP1)
  i2510.OnStartMIP2 = request.d('UnityEngine.Events.UnityEvent', i2511[4], i2510.OnStartMIP2)
  i2510.IsDoneCollecting = !!i2511[5]
  i2510.OnLevelComplete = request.d('UnityEngine.Events.UnityEvent', i2511[6], i2510.OnLevelComplete)
  request.r(i2511[7], i2511[8], 0, i2510, 'TutorialPanel')
  request.r(i2511[9], i2511[10], 0, i2510, 'GamePanel')
  request.r(i2511[11], i2511[12], 0, i2510, 'EndCard')
  request.r(i2511[13], i2511[14], 0, i2510, 'CTAPanel')
  request.r(i2511[15], i2511[16], 0, i2510, 'FailPanel')
  request.r(i2511[17], i2511[18], 0, i2510, 'EndCardInActivityPanel')
  i2510.iosLink = i2511[19]
  i2510.androidLink = i2511[20]
  i2510.hasTimer = !!i2511[21]
  i2510.currentTimer = i2511[22]
  i2510.maxTime = i2511[23]
  i2510.gameOver = !!i2511[24]
  request.r(i2511[25], i2511[26], 0, i2510, 'inactivityPanel')
  request.r(i2511[27], i2511[28], 0, i2510, 'inactivityPanelGame')
  i2510.inactivityTime = i2511[29]
  i2510.inactivityTimer = i2511[30]
  request.r(i2511[31], i2511[32], 0, i2510, 'timerText')
  var i2513 = i2511[33]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.add(request.d('GameManager+FurnitureItems', i2513[i + 0]));
  }
  i2510.items = i2512
  i2510.CurrentLevel = i2511[34]
  var i2515 = i2511[35]
  var i2514 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.add(request.d('GameManager+FurnitureItems', i2515[i + 0]));
  }
  i2510.currentFurnitures = i2514
  var i2517 = i2511[36]
  var i2516 = new (System.Collections.Generic.List$1(Bridge.ns('BasicFade')))
  for(var i = 0; i < i2517.length; i += 2) {
  request.r(i2517[i + 0], i2517[i + 1], 1, i2516, '')
  }
  i2510.gameBoards = i2516
  var i2519 = i2511[37]
  var i2518 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationBase')))
  for(var i = 0; i < i2519.length; i += 2) {
  request.r(i2519[i + 0], i2519[i + 1], 1, i2518, '')
  }
  i2510.furnitureDecorations = i2518
  var i2521 = i2511[38]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2521.length; i += 2) {
  request.r(i2521[i + 0], i2521[i + 1], 1, i2520, '')
  }
  i2510.mip1Objects = i2520
  var i2523 = i2511[39]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 1, i2522, '')
  }
  i2510.mip2Objects = i2522
  var i2525 = i2511[40]
  var i2524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2525.length; i += 2) {
  request.r(i2525[i + 0], i2525[i + 1], 1, i2524, '')
  }
  i2510.Feedback = i2524
  var i2527 = i2511[41]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.add(i2527[i + 0]);
  }
  i2510.audioKeys = i2526
  var i2529 = i2511[42]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.add(i2529[i + 0]);
  }
  i2510.cameraPanLocation = i2528
  request.r(i2511[43], i2511[44], 0, i2510, 'cameraPanObject')
  i2510.mip1ButtonPress = !!i2511[45]
  i2510.puzzlesToSolve = i2511[46]
  var i2531 = i2511[47]
  var i2530 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2531.length; i += 2) {
  request.r(i2531[i + 0], i2531[i + 1], 1, i2530, '')
  }
  i2510.redirectButtons = i2530
  return i2510
}

Deserializers["GameManager+FurnitureItems"] = function (request, data, root) {
  var i2534 = root || request.c( 'GameManager+FurnitureItems' )
  var i2535 = data
  i2534.key = i2535[0]
  request.r(i2535[1], i2535[2], 0, i2534, 'value')
  return i2534
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2542 = root || request.c( 'AudioManager' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'library')
  i2542.sfxPoolSize = i2543[2]
  return i2542
}

Deserializers["GameOrientationHandler"] = function (request, data, root) {
  var i2544 = root || request.c( 'GameOrientationHandler' )
  var i2545 = data
  i2544._previewOrientation = i2545[0]
  i2544._portraitRef = new pc.Vec2( i2545[1], i2545[2] )
  i2544._landscapeRef = new pc.Vec2( i2545[3], i2545[4] )
  var i2547 = i2545[5]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 2) {
  request.r(i2547[i + 0], i2547[i + 1], 2, i2546, '')
  }
  i2544._orientationSwitchers = i2546
  var i2549 = i2545[6]
  var i2548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.CanvasScaler')))
  for(var i = 0; i < i2549.length; i += 2) {
  request.r(i2549[i + 0], i2549[i + 1], 1, i2548, '')
  }
  i2544._canvasScalers = i2548
  var i2551 = i2545[7]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 2) {
  request.r(i2551[i + 0], i2551[i + 1], 2, i2550, '')
  }
  i2544._bgScalers = i2550
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2559 = data
  i2558.ambientIntensity = i2559[0]
  i2558.reflectionIntensity = i2559[1]
  i2558.ambientMode = i2559[2]
  i2558.ambientLight = new pc.Color(i2559[3], i2559[4], i2559[5], i2559[6])
  i2558.ambientSkyColor = new pc.Color(i2559[7], i2559[8], i2559[9], i2559[10])
  i2558.ambientGroundColor = new pc.Color(i2559[11], i2559[12], i2559[13], i2559[14])
  i2558.ambientEquatorColor = new pc.Color(i2559[15], i2559[16], i2559[17], i2559[18])
  i2558.fogColor = new pc.Color(i2559[19], i2559[20], i2559[21], i2559[22])
  i2558.fogEndDistance = i2559[23]
  i2558.fogStartDistance = i2559[24]
  i2558.fogDensity = i2559[25]
  i2558.fog = !!i2559[26]
  request.r(i2559[27], i2559[28], 0, i2558, 'skybox')
  i2558.fogMode = i2559[29]
  var i2561 = i2559[30]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2561[i + 0]) );
  }
  i2558.lightmaps = i2560
  i2558.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2559[31], i2558.lightProbes)
  i2558.lightmapsMode = i2559[32]
  i2558.mixedBakeMode = i2559[33]
  i2558.environmentLightingMode = i2559[34]
  i2558.ambientProbe = new pc.SphericalHarmonicsL2(i2559[35])
  i2558.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2559[36])
  i2558.useReferenceAmbientProbe = !!i2559[37]
  request.r(i2559[38], i2559[39], 0, i2558, 'customReflection')
  request.r(i2559[40], i2559[41], 0, i2558, 'defaultReflection')
  i2558.defaultReflectionMode = i2559[42]
  i2558.defaultReflectionResolution = i2559[43]
  i2558.sunLightObjectId = i2559[44]
  i2558.pixelLightCount = i2559[45]
  i2558.defaultReflectionHDR = !!i2559[46]
  i2558.hasLightDataAsset = !!i2559[47]
  i2558.hasManualGenerate = !!i2559[48]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2565 = data
  request.r(i2565[0], i2565[1], 0, i2564, 'lightmapColor')
  request.r(i2565[2], i2565[3], 0, i2564, 'lightmapDirection')
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2566 = root || new UnityEngine.LightProbes()
  var i2567 = data
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2573 = data
  var i2575 = i2573[0]
  var i2574 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2575[i + 0]));
  }
  i2572.ShaderCompilationErrors = i2574
  i2572.name = i2573[1]
  i2572.guid = i2573[2]
  var i2577 = i2573[3]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( i2577[i + 0] );
  }
  i2572.shaderDefinedKeywords = i2576
  var i2579 = i2573[4]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2579[i + 0]) );
  }
  i2572.passes = i2578
  var i2581 = i2573[5]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2581[i + 0]) );
  }
  i2572.usePasses = i2580
  var i2583 = i2573[6]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2583[i + 0]) );
  }
  i2572.defaultParameterValues = i2582
  request.r(i2573[7], i2573[8], 0, i2572, 'unityFallbackShader')
  i2572.readDepth = !!i2573[9]
  i2572.isCreatedByShaderGraph = !!i2573[10]
  i2572.compiled = !!i2573[11]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2587 = data
  i2586.shaderName = i2587[0]
  i2586.errorMessage = i2587[1]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2592 = root || new pc.UnityShaderPass()
  var i2593 = data
  i2592.id = i2593[0]
  i2592.subShaderIndex = i2593[1]
  i2592.name = i2593[2]
  i2592.passType = i2593[3]
  i2592.grabPassTextureName = i2593[4]
  i2592.usePass = !!i2593[5]
  i2592.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[6], i2592.zTest)
  i2592.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[7], i2592.zWrite)
  i2592.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[8], i2592.culling)
  i2592.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2593[9], i2592.blending)
  i2592.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2593[10], i2592.alphaBlending)
  i2592.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[11], i2592.colorWriteMask)
  i2592.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[12], i2592.offsetUnits)
  i2592.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[13], i2592.offsetFactor)
  i2592.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[14], i2592.stencilRef)
  i2592.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[15], i2592.stencilReadMask)
  i2592.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[16], i2592.stencilWriteMask)
  i2592.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2593[17], i2592.stencilOp)
  i2592.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2593[18], i2592.stencilOpFront)
  i2592.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2593[19], i2592.stencilOpBack)
  var i2595 = i2593[20]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2595[i + 0]) );
  }
  i2592.tags = i2594
  var i2597 = i2593[21]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( i2597[i + 0] );
  }
  i2592.passDefinedKeywords = i2596
  var i2599 = i2593[22]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2599[i + 0]) );
  }
  i2592.passDefinedKeywordGroups = i2598
  var i2601 = i2593[23]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2601[i + 0]) );
  }
  i2592.variants = i2600
  var i2603 = i2593[24]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2603[i + 0]) );
  }
  i2592.excludedVariants = i2602
  i2592.hasDepthReader = !!i2593[25]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2605 = data
  i2604.val = i2605[0]
  i2604.name = i2605[1]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2607 = data
  i2606.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[0], i2606.src)
  i2606.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[1], i2606.dst)
  i2606.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[2], i2606.op)
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2609 = data
  i2608.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[0], i2608.pass)
  i2608.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[1], i2608.fail)
  i2608.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[2], i2608.zFail)
  i2608.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[3], i2608.comp)
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2613 = data
  i2612.name = i2613[0]
  i2612.value = i2613[1]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2617 = data
  var i2619 = i2617[0]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( i2619[i + 0] );
  }
  i2616.keywords = i2618
  i2616.hasDiscard = !!i2617[1]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2623 = data
  i2622.passId = i2623[0]
  i2622.subShaderIndex = i2623[1]
  var i2625 = i2623[2]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( i2625[i + 0] );
  }
  i2622.keywords = i2624
  i2622.vertexProgram = i2623[3]
  i2622.fragmentProgram = i2623[4]
  i2622.exportedForWebGl2 = !!i2623[5]
  i2622.readDepth = !!i2623[6]
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2629 = data
  request.r(i2629[0], i2629[1], 0, i2628, 'shader')
  i2628.pass = i2629[2]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2633 = data
  i2632.name = i2633[0]
  i2632.type = i2633[1]
  i2632.value = new pc.Vec4( i2633[2], i2633[3], i2633[4], i2633[5] )
  i2632.textureValue = i2633[6]
  i2632.shaderPropertyFlag = i2633[7]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2635 = data
  i2634.name = i2635[0]
  request.r(i2635[1], i2635[2], 0, i2634, 'texture')
  i2634.aabb = i2635[3]
  i2634.vertices = i2635[4]
  i2634.triangles = i2635[5]
  i2634.textureRect = UnityEngine.Rect.MinMaxRect(i2635[6], i2635[7], i2635[8], i2635[9])
  i2634.packedRect = UnityEngine.Rect.MinMaxRect(i2635[10], i2635[11], i2635[12], i2635[13])
  i2634.border = new pc.Vec4( i2635[14], i2635[15], i2635[16], i2635[17] )
  i2634.transparency = i2635[18]
  i2634.bounds = i2635[19]
  i2634.pixelsPerUnit = i2635[20]
  i2634.textureWidth = i2635[21]
  i2634.textureHeight = i2635[22]
  i2634.nativeSize = new pc.Vec2( i2635[23], i2635[24] )
  i2634.pivot = new pc.Vec2( i2635[25], i2635[26] )
  i2634.textureRectOffset = new pc.Vec2( i2635[27], i2635[28] )
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2637 = data
  i2636.name = i2637[0]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2639 = data
  i2638.name = i2639[0]
  i2638.wrapMode = i2639[1]
  i2638.isLooping = !!i2639[2]
  i2638.length = i2639[3]
  var i2641 = i2639[4]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2641[i + 0]) );
  }
  i2638.curves = i2640
  var i2643 = i2639[5]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2643[i + 0]) );
  }
  i2638.events = i2642
  i2638.halfPrecision = !!i2639[6]
  i2638._frameRate = i2639[7]
  i2638.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2639[8], i2638.localBounds)
  i2638.hasMuscleCurves = !!i2639[9]
  var i2645 = i2639[10]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( i2645[i + 0] );
  }
  i2638.clipMuscleConstant = i2644
  i2638.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2639[11], i2638.clipBindingConstant)
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2649 = data
  i2648.path = i2649[0]
  i2648.hash = i2649[1]
  i2648.componentType = i2649[2]
  i2648.property = i2649[3]
  i2648.keys = i2649[4]
  var i2651 = i2649[5]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2651[i + 0]) );
  }
  i2648.objectReferenceKeys = i2650
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2655 = data
  i2654.time = i2655[0]
  request.r(i2655[1], i2655[2], 0, i2654, 'value')
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2659 = data
  i2658.functionName = i2659[0]
  i2658.floatParameter = i2659[1]
  i2658.intParameter = i2659[2]
  i2658.stringParameter = i2659[3]
  request.r(i2659[4], i2659[5], 0, i2658, 'objectReferenceParameter')
  i2658.time = i2659[6]
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2661 = data
  i2660.center = new pc.Vec3( i2661[0], i2661[1], i2661[2] )
  i2660.extends = new pc.Vec3( i2661[3], i2661[4], i2661[5] )
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2665 = data
  var i2667 = i2665[0]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( i2667[i + 0] );
  }
  i2664.genericBindings = i2666
  var i2669 = i2665[1]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( i2669[i + 0] );
  }
  i2664.pptrCurveMapping = i2668
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2671 = data
  i2670.name = i2671[0]
  i2670.ascent = i2671[1]
  i2670.originalLineHeight = i2671[2]
  i2670.fontSize = i2671[3]
  var i2673 = i2671[4]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2673[i + 0]) );
  }
  i2670.characterInfo = i2672
  request.r(i2671[5], i2671[6], 0, i2670, 'texture')
  i2670.originalFontSize = i2671[7]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2677 = data
  i2676.index = i2677[0]
  i2676.advance = i2677[1]
  i2676.bearing = i2677[2]
  i2676.glyphWidth = i2677[3]
  i2676.glyphHeight = i2677[4]
  i2676.minX = i2677[5]
  i2676.maxX = i2677[6]
  i2676.minY = i2677[7]
  i2676.maxY = i2677[8]
  i2676.uvBottomLeftX = i2677[9]
  i2676.uvBottomLeftY = i2677[10]
  i2676.uvBottomRightX = i2677[11]
  i2676.uvBottomRightY = i2677[12]
  i2676.uvTopLeftX = i2677[13]
  i2676.uvTopLeftY = i2677[14]
  i2676.uvTopRightX = i2677[15]
  i2676.uvTopRightY = i2677[16]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2679 = data
  i2678.name = i2679[0]
  var i2681 = i2679[1]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2681[i + 0]) );
  }
  i2678.layers = i2680
  var i2683 = i2679[2]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2683[i + 0]) );
  }
  i2678.parameters = i2682
  i2678.animationClips = i2679[3]
  i2678.avatarUnsupported = i2679[4]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2687 = data
  i2686.name = i2687[0]
  i2686.defaultWeight = i2687[1]
  i2686.blendingMode = i2687[2]
  i2686.avatarMask = i2687[3]
  i2686.syncedLayerIndex = i2687[4]
  i2686.syncedLayerAffectsTiming = !!i2687[5]
  i2686.syncedLayers = i2687[6]
  i2686.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2687[7], i2686.stateMachine)
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2689 = data
  i2688.id = i2689[0]
  i2688.name = i2689[1]
  i2688.path = i2689[2]
  var i2691 = i2689[3]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2691[i + 0]) );
  }
  i2688.states = i2690
  var i2693 = i2689[4]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2693[i + 0]) );
  }
  i2688.machines = i2692
  var i2695 = i2689[5]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2695[i + 0]) );
  }
  i2688.entryStateTransitions = i2694
  var i2697 = i2689[6]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2697[i + 0]) );
  }
  i2688.exitStateTransitions = i2696
  var i2699 = i2689[7]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2699[i + 0]) );
  }
  i2688.anyStateTransitions = i2698
  i2688.defaultStateId = i2689[8]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2703 = data
  i2702.id = i2703[0]
  i2702.name = i2703[1]
  i2702.cycleOffset = i2703[2]
  i2702.cycleOffsetParameter = i2703[3]
  i2702.cycleOffsetParameterActive = !!i2703[4]
  i2702.mirror = !!i2703[5]
  i2702.mirrorParameter = i2703[6]
  i2702.mirrorParameterActive = !!i2703[7]
  i2702.motionId = i2703[8]
  i2702.nameHash = i2703[9]
  i2702.fullPathHash = i2703[10]
  i2702.speed = i2703[11]
  i2702.speedParameter = i2703[12]
  i2702.speedParameterActive = !!i2703[13]
  i2702.tag = i2703[14]
  i2702.tagHash = i2703[15]
  i2702.writeDefaultValues = !!i2703[16]
  var i2705 = i2703[17]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 2) {
  request.r(i2705[i + 0], i2705[i + 1], 2, i2704, '')
  }
  i2702.behaviours = i2704
  var i2707 = i2703[18]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2707[i + 0]) );
  }
  i2702.transitions = i2706
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2713 = data
  i2712.fullPath = i2713[0]
  i2712.canTransitionToSelf = !!i2713[1]
  i2712.duration = i2713[2]
  i2712.exitTime = i2713[3]
  i2712.hasExitTime = !!i2713[4]
  i2712.hasFixedDuration = !!i2713[5]
  i2712.interruptionSource = i2713[6]
  i2712.offset = i2713[7]
  i2712.orderedInterruption = !!i2713[8]
  i2712.destinationStateId = i2713[9]
  i2712.isExit = !!i2713[10]
  i2712.mute = !!i2713[11]
  i2712.solo = !!i2713[12]
  var i2715 = i2713[13]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2715[i + 0]) );
  }
  i2712.conditions = i2714
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2721 = data
  i2720.destinationStateId = i2721[0]
  i2720.isExit = !!i2721[1]
  i2720.mute = !!i2721[2]
  i2720.solo = !!i2721[3]
  var i2723 = i2721[4]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2723[i + 0]) );
  }
  i2720.conditions = i2722
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2727 = data
  i2726.defaultBool = !!i2727[0]
  i2726.defaultFloat = i2727[1]
  i2726.defaultInt = i2727[2]
  i2726.name = i2727[3]
  i2726.nameHash = i2727[4]
  i2726.type = i2727[5]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2729 = data
  i2728.name = i2729[0]
  i2728.bytes64 = i2729[1]
  i2728.data = i2729[2]
  return i2728
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2730 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2731 = data
  i2730.hashCode = i2731[0]
  request.r(i2731[1], i2731[2], 0, i2730, 'material')
  i2730.materialHashCode = i2731[3]
  request.r(i2731[4], i2731[5], 0, i2730, 'atlas')
  i2730.normalStyle = i2731[6]
  i2730.normalSpacingOffset = i2731[7]
  i2730.boldStyle = i2731[8]
  i2730.boldSpacing = i2731[9]
  i2730.italicStyle = i2731[10]
  i2730.tabSize = i2731[11]
  i2730.m_Version = i2731[12]
  i2730.m_SourceFontFileGUID = i2731[13]
  request.r(i2731[14], i2731[15], 0, i2730, 'm_SourceFontFile_EditorRef')
  request.r(i2731[16], i2731[17], 0, i2730, 'm_SourceFontFile')
  i2730.m_AtlasPopulationMode = i2731[18]
  i2730.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2731[19], i2730.m_FaceInfo)
  var i2733 = i2731[20]
  var i2732 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.add(request.d('UnityEngine.TextCore.Glyph', i2733[i + 0]));
  }
  i2730.m_GlyphTable = i2732
  var i2735 = i2731[21]
  var i2734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.add(request.d('TMPro.TMP_Character', i2735[i + 0]));
  }
  i2730.m_CharacterTable = i2734
  var i2737 = i2731[22]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 2) {
  request.r(i2737[i + 0], i2737[i + 1], 2, i2736, '')
  }
  i2730.m_AtlasTextures = i2736
  i2730.m_AtlasTextureIndex = i2731[23]
  i2730.m_IsMultiAtlasTexturesEnabled = !!i2731[24]
  i2730.m_ClearDynamicDataOnBuild = !!i2731[25]
  var i2739 = i2731[26]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.add(request.d('UnityEngine.TextCore.GlyphRect', i2739[i + 0]));
  }
  i2730.m_UsedGlyphRects = i2738
  var i2741 = i2731[27]
  var i2740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.add(request.d('UnityEngine.TextCore.GlyphRect', i2741[i + 0]));
  }
  i2730.m_FreeGlyphRects = i2740
  i2730.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2731[28], i2730.m_fontInfo)
  i2730.m_AtlasWidth = i2731[29]
  i2730.m_AtlasHeight = i2731[30]
  i2730.m_AtlasPadding = i2731[31]
  i2730.m_AtlasRenderMode = i2731[32]
  var i2743 = i2731[33]
  var i2742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.add(request.d('TMPro.TMP_Glyph', i2743[i + 0]));
  }
  i2730.m_glyphInfoList = i2742
  i2730.m_KerningTable = request.d('TMPro.KerningTable', i2731[34], i2730.m_KerningTable)
  i2730.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2731[35], i2730.m_FontFeatureTable)
  var i2745 = i2731[36]
  var i2744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2745.length; i += 2) {
  request.r(i2745[i + 0], i2745[i + 1], 1, i2744, '')
  }
  i2730.fallbackFontAssets = i2744
  var i2747 = i2731[37]
  var i2746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2747.length; i += 2) {
  request.r(i2747[i + 0], i2747[i + 1], 1, i2746, '')
  }
  i2730.m_FallbackFontAssetTable = i2746
  i2730.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2731[38], i2730.m_CreationSettings)
  var i2749 = i2731[39]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( request.d('TMPro.TMP_FontWeightPair', i2749[i + 0]) );
  }
  i2730.m_FontWeightTable = i2748
  var i2751 = i2731[40]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( request.d('TMPro.TMP_FontWeightPair', i2751[i + 0]) );
  }
  i2730.fontWeights = i2750
  return i2730
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2752 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2753 = data
  i2752.m_FaceIndex = i2753[0]
  i2752.m_FamilyName = i2753[1]
  i2752.m_StyleName = i2753[2]
  i2752.m_PointSize = i2753[3]
  i2752.m_Scale = i2753[4]
  i2752.m_UnitsPerEM = i2753[5]
  i2752.m_LineHeight = i2753[6]
  i2752.m_AscentLine = i2753[7]
  i2752.m_CapLine = i2753[8]
  i2752.m_MeanLine = i2753[9]
  i2752.m_Baseline = i2753[10]
  i2752.m_DescentLine = i2753[11]
  i2752.m_SuperscriptOffset = i2753[12]
  i2752.m_SuperscriptSize = i2753[13]
  i2752.m_SubscriptOffset = i2753[14]
  i2752.m_SubscriptSize = i2753[15]
  i2752.m_UnderlineOffset = i2753[16]
  i2752.m_UnderlineThickness = i2753[17]
  i2752.m_StrikethroughOffset = i2753[18]
  i2752.m_StrikethroughThickness = i2753[19]
  i2752.m_TabWidth = i2753[20]
  return i2752
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2756 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2757 = data
  i2756.m_Index = i2757[0]
  i2756.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2757[1], i2756.m_Metrics)
  i2756.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2757[2], i2756.m_GlyphRect)
  i2756.m_Scale = i2757[3]
  i2756.m_AtlasIndex = i2757[4]
  i2756.m_ClassDefinitionType = i2757[5]
  return i2756
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2758 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2759 = data
  i2758.m_Width = i2759[0]
  i2758.m_Height = i2759[1]
  i2758.m_HorizontalBearingX = i2759[2]
  i2758.m_HorizontalBearingY = i2759[3]
  i2758.m_HorizontalAdvance = i2759[4]
  return i2758
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2760 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2761 = data
  i2760.m_X = i2761[0]
  i2760.m_Y = i2761[1]
  i2760.m_Width = i2761[2]
  i2760.m_Height = i2761[3]
  return i2760
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2764 = root || request.c( 'TMPro.TMP_Character' )
  var i2765 = data
  i2764.m_ElementType = i2765[0]
  i2764.m_Unicode = i2765[1]
  i2764.m_GlyphIndex = i2765[2]
  i2764.m_Scale = i2765[3]
  return i2764
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2770 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2771 = data
  i2770.Name = i2771[0]
  i2770.PointSize = i2771[1]
  i2770.Scale = i2771[2]
  i2770.CharacterCount = i2771[3]
  i2770.LineHeight = i2771[4]
  i2770.Baseline = i2771[5]
  i2770.Ascender = i2771[6]
  i2770.CapHeight = i2771[7]
  i2770.Descender = i2771[8]
  i2770.CenterLine = i2771[9]
  i2770.SuperscriptOffset = i2771[10]
  i2770.SubscriptOffset = i2771[11]
  i2770.SubSize = i2771[12]
  i2770.Underline = i2771[13]
  i2770.UnderlineThickness = i2771[14]
  i2770.strikethrough = i2771[15]
  i2770.strikethroughThickness = i2771[16]
  i2770.TabWidth = i2771[17]
  i2770.Padding = i2771[18]
  i2770.AtlasWidth = i2771[19]
  i2770.AtlasHeight = i2771[20]
  return i2770
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2775 = data
  i2774.id = i2775[0]
  i2774.x = i2775[1]
  i2774.y = i2775[2]
  i2774.width = i2775[3]
  i2774.height = i2775[4]
  i2774.xOffset = i2775[5]
  i2774.yOffset = i2775[6]
  i2774.xAdvance = i2775[7]
  i2774.scale = i2775[8]
  return i2774
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2776 = root || request.c( 'TMPro.KerningTable' )
  var i2777 = data
  var i2779 = i2777[0]
  var i2778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.add(request.d('TMPro.KerningPair', i2779[i + 0]));
  }
  i2776.kerningPairs = i2778
  return i2776
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2782 = root || request.c( 'TMPro.KerningPair' )
  var i2783 = data
  i2782.xOffset = i2783[0]
  i2782.m_FirstGlyph = i2783[1]
  i2782.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2783[2], i2782.m_FirstGlyphAdjustments)
  i2782.m_SecondGlyph = i2783[3]
  i2782.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2783[4], i2782.m_SecondGlyphAdjustments)
  i2782.m_IgnoreSpacingAdjustments = !!i2783[5]
  return i2782
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2784 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2785 = data
  var i2787 = i2785[0]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2787[i + 0]));
  }
  i2784.m_GlyphPairAdjustmentRecords = i2786
  return i2784
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2790 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2791 = data
  i2790.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2791[0], i2790.m_FirstAdjustmentRecord)
  i2790.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2791[1], i2790.m_SecondAdjustmentRecord)
  i2790.m_FeatureLookupFlags = i2791[2]
  return i2790
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2794 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2795 = data
  i2794.sourceFontFileName = i2795[0]
  i2794.sourceFontFileGUID = i2795[1]
  i2794.pointSizeSamplingMode = i2795[2]
  i2794.pointSize = i2795[3]
  i2794.padding = i2795[4]
  i2794.packingMode = i2795[5]
  i2794.atlasWidth = i2795[6]
  i2794.atlasHeight = i2795[7]
  i2794.characterSetSelectionMode = i2795[8]
  i2794.characterSequence = i2795[9]
  i2794.referencedFontAssetGUID = i2795[10]
  i2794.referencedTextAssetGUID = i2795[11]
  i2794.fontStyle = i2795[12]
  i2794.fontStyleModifier = i2795[13]
  i2794.renderMode = i2795[14]
  i2794.includeFontFeatures = !!i2795[15]
  return i2794
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2798 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2799 = data
  request.r(i2799[0], i2799[1], 0, i2798, 'regularTypeface')
  request.r(i2799[2], i2799[3], 0, i2798, 'italicTypeface')
  return i2798
}

Deserializers["ItemData"] = function (request, data, root) {
  var i2800 = root || request.c( 'ItemData' )
  var i2801 = data
  i2800.itemName = i2801[0]
  request.r(i2801[1], i2801[2], 0, i2800, 'itemIcon')
  i2800.ItemCount = i2801[3]
  request.r(i2801[4], i2801[5], 0, i2800, 'collectItemSprite')
  i2800.color = i2801[6]
  request.r(i2801[7], i2801[8], 0, i2800, 'DecorationSprite')
  return i2800
}

Deserializers["TileData"] = function (request, data, root) {
  var i2802 = root || request.c( 'TileData' )
  var i2803 = data
  i2802.tileName = i2803[0]
  request.r(i2803[1], i2803[2], 0, i2802, 'tileSprite')
  i2802.isPowerup = !!i2803[3]
  i2802.isBreakable = !!i2803[4]
  i2802.isSwappable = !!i2803[5]
  i2802.isSpecialBreakable = !!i2803[6]
  return i2802
}

Deserializers["DynamitePowerup"] = function (request, data, root) {
  var i2804 = root || request.c( 'DynamitePowerup' )
  var i2805 = data
  i2804.explosionRadius = i2805[0]
  i2804.tileName = i2805[1]
  request.r(i2805[2], i2805[3], 0, i2804, 'tileSprite')
  i2804.isPowerup = !!i2805[4]
  i2804.isBreakable = !!i2805[5]
  i2804.isSwappable = !!i2805[6]
  i2804.isSpecialBreakable = !!i2805[7]
  return i2804
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i2806 = root || request.c( 'AudioLibrary' )
  var i2807 = data
  var i2809 = i2807[0]
  var i2808 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.add(request.d('AudioLibrary+ClipEntry', i2809[i + 0]));
  }
  i2806.clips = i2808
  return i2806
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i2812 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i2813 = data
  i2812.key = i2813[0]
  i2812.channel = i2813[1]
  request.r(i2813[2], i2813[3], 0, i2812, 'clip')
  i2812.volume = i2813[4]
  i2812.loop = !!i2813[5]
  return i2812
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.TMP_Settings' )
  var i2815 = data
  i2814.m_enableWordWrapping = !!i2815[0]
  i2814.m_enableKerning = !!i2815[1]
  i2814.m_enableExtraPadding = !!i2815[2]
  i2814.m_enableTintAllSprites = !!i2815[3]
  i2814.m_enableParseEscapeCharacters = !!i2815[4]
  i2814.m_EnableRaycastTarget = !!i2815[5]
  i2814.m_GetFontFeaturesAtRuntime = !!i2815[6]
  i2814.m_missingGlyphCharacter = i2815[7]
  i2814.m_warningsDisabled = !!i2815[8]
  request.r(i2815[9], i2815[10], 0, i2814, 'm_defaultFontAsset')
  i2814.m_defaultFontAssetPath = i2815[11]
  i2814.m_defaultFontSize = i2815[12]
  i2814.m_defaultAutoSizeMinRatio = i2815[13]
  i2814.m_defaultAutoSizeMaxRatio = i2815[14]
  i2814.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2815[15], i2815[16] )
  i2814.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2815[17], i2815[18] )
  i2814.m_autoSizeTextContainer = !!i2815[19]
  i2814.m_IsTextObjectScaleStatic = !!i2815[20]
  var i2817 = i2815[21]
  var i2816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2817.length; i += 2) {
  request.r(i2817[i + 0], i2817[i + 1], 1, i2816, '')
  }
  i2814.m_fallbackFontAssets = i2816
  i2814.m_matchMaterialPreset = !!i2815[22]
  request.r(i2815[23], i2815[24], 0, i2814, 'm_defaultSpriteAsset')
  i2814.m_defaultSpriteAssetPath = i2815[25]
  i2814.m_enableEmojiSupport = !!i2815[26]
  i2814.m_MissingCharacterSpriteUnicode = i2815[27]
  i2814.m_defaultColorGradientPresetsPath = i2815[28]
  request.r(i2815[29], i2815[30], 0, i2814, 'm_defaultStyleSheet')
  i2814.m_StyleSheetsResourcePath = i2815[31]
  request.r(i2815[32], i2815[33], 0, i2814, 'm_leadingCharacters')
  request.r(i2815[34], i2815[35], 0, i2814, 'm_followingCharacters')
  i2814.m_UseModernHangulLineBreakingRules = !!i2815[36]
  return i2814
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2818 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2819 = data
  i2818.hashCode = i2819[0]
  request.r(i2819[1], i2819[2], 0, i2818, 'material')
  i2818.materialHashCode = i2819[3]
  request.r(i2819[4], i2819[5], 0, i2818, 'spriteSheet')
  var i2821 = i2819[6]
  var i2820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.add(request.d('TMPro.TMP_Sprite', i2821[i + 0]));
  }
  i2818.spriteInfoList = i2820
  var i2823 = i2819[7]
  var i2822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2823.length; i += 2) {
  request.r(i2823[i + 0], i2823[i + 1], 1, i2822, '')
  }
  i2818.fallbackSpriteAssets = i2822
  i2818.m_Version = i2819[8]
  i2818.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2819[9], i2818.m_FaceInfo)
  var i2825 = i2819[10]
  var i2824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.add(request.d('TMPro.TMP_SpriteCharacter', i2825[i + 0]));
  }
  i2818.m_SpriteCharacterTable = i2824
  var i2827 = i2819[11]
  var i2826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.add(request.d('TMPro.TMP_SpriteGlyph', i2827[i + 0]));
  }
  i2818.m_SpriteGlyphTable = i2826
  return i2818
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2830 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2831 = data
  i2830.name = i2831[0]
  i2830.hashCode = i2831[1]
  i2830.unicode = i2831[2]
  i2830.pivot = new pc.Vec2( i2831[3], i2831[4] )
  request.r(i2831[5], i2831[6], 0, i2830, 'sprite')
  i2830.id = i2831[7]
  i2830.x = i2831[8]
  i2830.y = i2831[9]
  i2830.width = i2831[10]
  i2830.height = i2831[11]
  i2830.xOffset = i2831[12]
  i2830.yOffset = i2831[13]
  i2830.xAdvance = i2831[14]
  i2830.scale = i2831[15]
  return i2830
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2836 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2837 = data
  i2836.m_Name = i2837[0]
  i2836.m_HashCode = i2837[1]
  i2836.m_ElementType = i2837[2]
  i2836.m_Unicode = i2837[3]
  i2836.m_GlyphIndex = i2837[4]
  i2836.m_Scale = i2837[5]
  return i2836
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2840 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2841 = data
  request.r(i2841[0], i2841[1], 0, i2840, 'sprite')
  i2840.m_Index = i2841[2]
  i2840.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2841[3], i2840.m_Metrics)
  i2840.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2841[4], i2840.m_GlyphRect)
  i2840.m_Scale = i2841[5]
  i2840.m_AtlasIndex = i2841[6]
  i2840.m_ClassDefinitionType = i2841[7]
  return i2840
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2842 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2843 = data
  var i2845 = i2843[0]
  var i2844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.add(request.d('TMPro.TMP_Style', i2845[i + 0]));
  }
  i2842.m_StyleList = i2844
  return i2842
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2848 = root || request.c( 'TMPro.TMP_Style' )
  var i2849 = data
  i2848.m_Name = i2849[0]
  i2848.m_HashCode = i2849[1]
  i2848.m_OpeningDefinition = i2849[2]
  i2848.m_ClosingDefinition = i2849[3]
  i2848.m_OpeningTagArray = i2849[4]
  i2848.m_ClosingTagArray = i2849[5]
  i2848.m_OpeningTagUnicodeArray = i2849[6]
  i2848.m_ClosingTagUnicodeArray = i2849[7]
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2851 = data
  var i2853 = i2851[0]
  var i2852 = []
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2853[i + 0]) );
  }
  i2850.files = i2852
  i2850.componentToPrefabIds = i2851[1]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2857 = data
  i2856.path = i2857[0]
  request.r(i2857[1], i2857[2], 0, i2856, 'unityObject')
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2859 = data
  var i2861 = i2859[0]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2861[i + 0]) );
  }
  i2858.scriptsExecutionOrder = i2860
  var i2863 = i2859[1]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2863[i + 0]) );
  }
  i2858.sortingLayers = i2862
  var i2865 = i2859[2]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2865[i + 0]) );
  }
  i2858.cullingLayers = i2864
  i2858.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2859[3], i2858.timeSettings)
  i2858.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2859[4], i2858.physicsSettings)
  i2858.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2859[5], i2858.physics2DSettings)
  i2858.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2859[6], i2858.qualitySettings)
  i2858.enableRealtimeShadows = !!i2859[7]
  i2858.enableAutoInstancing = !!i2859[8]
  i2858.enableDynamicBatching = !!i2859[9]
  i2858.lightmapEncodingQuality = i2859[10]
  i2858.desiredColorSpace = i2859[11]
  var i2867 = i2859[12]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( i2867[i + 0] );
  }
  i2858.allTags = i2866
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2871 = data
  i2870.name = i2871[0]
  i2870.value = i2871[1]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2875 = data
  i2874.id = i2875[0]
  i2874.name = i2875[1]
  i2874.value = i2875[2]
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2879 = data
  i2878.id = i2879[0]
  i2878.name = i2879[1]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2881 = data
  i2880.fixedDeltaTime = i2881[0]
  i2880.maximumDeltaTime = i2881[1]
  i2880.timeScale = i2881[2]
  i2880.maximumParticleTimestep = i2881[3]
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2883 = data
  i2882.gravity = new pc.Vec3( i2883[0], i2883[1], i2883[2] )
  i2882.defaultSolverIterations = i2883[3]
  i2882.bounceThreshold = i2883[4]
  i2882.autoSyncTransforms = !!i2883[5]
  i2882.autoSimulation = !!i2883[6]
  var i2885 = i2883[7]
  var i2884 = []
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2885[i + 0]) );
  }
  i2882.collisionMatrix = i2884
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2889 = data
  i2888.enabled = !!i2889[0]
  i2888.layerId = i2889[1]
  i2888.otherLayerId = i2889[2]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2891 = data
  request.r(i2891[0], i2891[1], 0, i2890, 'material')
  i2890.gravity = new pc.Vec2( i2891[2], i2891[3] )
  i2890.positionIterations = i2891[4]
  i2890.velocityIterations = i2891[5]
  i2890.velocityThreshold = i2891[6]
  i2890.maxLinearCorrection = i2891[7]
  i2890.maxAngularCorrection = i2891[8]
  i2890.maxTranslationSpeed = i2891[9]
  i2890.maxRotationSpeed = i2891[10]
  i2890.baumgarteScale = i2891[11]
  i2890.baumgarteTOIScale = i2891[12]
  i2890.timeToSleep = i2891[13]
  i2890.linearSleepTolerance = i2891[14]
  i2890.angularSleepTolerance = i2891[15]
  i2890.defaultContactOffset = i2891[16]
  i2890.autoSimulation = !!i2891[17]
  i2890.queriesHitTriggers = !!i2891[18]
  i2890.queriesStartInColliders = !!i2891[19]
  i2890.callbacksOnDisable = !!i2891[20]
  i2890.reuseCollisionCallbacks = !!i2891[21]
  i2890.autoSyncTransforms = !!i2891[22]
  var i2893 = i2891[23]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2893[i + 0]) );
  }
  i2890.collisionMatrix = i2892
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2897 = data
  i2896.enabled = !!i2897[0]
  i2896.layerId = i2897[1]
  i2896.otherLayerId = i2897[2]
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2899 = data
  var i2901 = i2899[0]
  var i2900 = []
  for(var i = 0; i < i2901.length; i += 1) {
    i2900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2901[i + 0]) );
  }
  i2898.qualityLevels = i2900
  var i2903 = i2899[1]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.push( i2903[i + 0] );
  }
  i2898.names = i2902
  i2898.shadows = i2899[2]
  i2898.anisotropicFiltering = i2899[3]
  i2898.antiAliasing = i2899[4]
  i2898.lodBias = i2899[5]
  i2898.shadowCascades = i2899[6]
  i2898.shadowDistance = i2899[7]
  i2898.shadowmaskMode = i2899[8]
  i2898.shadowProjection = i2899[9]
  i2898.shadowResolution = i2899[10]
  i2898.softParticles = !!i2899[11]
  i2898.softVegetation = !!i2899[12]
  i2898.activeColorSpace = i2899[13]
  i2898.desiredColorSpace = i2899[14]
  i2898.masterTextureLimit = i2899[15]
  i2898.maxQueuedFrames = i2899[16]
  i2898.particleRaycastBudget = i2899[17]
  i2898.pixelLightCount = i2899[18]
  i2898.realtimeReflectionProbes = !!i2899[19]
  i2898.shadowCascade2Split = i2899[20]
  i2898.shadowCascade4Split = new pc.Vec3( i2899[21], i2899[22], i2899[23] )
  i2898.streamingMipmapsActive = !!i2899[24]
  i2898.vSyncCount = i2899[25]
  i2898.asyncUploadBufferSize = i2899[26]
  i2898.asyncUploadTimeSlice = i2899[27]
  i2898.billboardsFaceCameraPosition = !!i2899[28]
  i2898.shadowNearPlaneOffset = i2899[29]
  i2898.streamingMipmapsMemoryBudget = i2899[30]
  i2898.maximumLODLevel = i2899[31]
  i2898.streamingMipmapsAddAllCameras = !!i2899[32]
  i2898.streamingMipmapsMaxLevelReduction = i2899[33]
  i2898.streamingMipmapsRenderersPerFrame = i2899[34]
  i2898.resolutionScalingFixedDPIFactor = i2899[35]
  i2898.streamingMipmapsMaxFileIORequests = i2899[36]
  i2898.currentQualityLevel = i2899[37]
  return i2898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2909 = data
  i2908.weight = i2909[0]
  i2908.vertices = i2909[1]
  i2908.normals = i2909[2]
  i2908.tangents = i2909[3]
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2913 = data
  i2912.mode = i2913[0]
  i2912.parameter = i2913[1]
  i2912.threshold = i2913[2]
  return i2912
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2914 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2915 = data
  i2914.xPlacement = i2915[0]
  i2914.yPlacement = i2915[1]
  i2914.xAdvance = i2915[2]
  i2914.yAdvance = i2915[3]
  return i2914
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2916 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2917 = data
  i2916.m_GlyphIndex = i2917[0]
  i2916.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2917[1], i2916.m_GlyphValueRecord)
  return i2916
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2918 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2919 = data
  i2918.m_XPlacement = i2919[0]
  i2918.m_YPlacement = i2919[1]
  i2918.m_XAdvance = i2919[2]
  i2918.m_YAdvance = i2919[3]
  return i2918
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[72],"73":[27],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[83],"91":[83],"92":[83],"93":[83],"94":[83],"95":[83],"96":[27],"97":[98],"99":[100],"101":[100],"29":[0],"20":[17],"102":[17],"103":[17],"104":[27],"105":[106],"107":[0],"108":[1,0],"109":[98],"110":[1,0],"111":[50,98],"112":[98],"113":[98,114],"115":[75],"116":[83],"117":[106],"118":[119],"120":[49],"121":[27],"122":[123],"124":[0],"125":[98,0],"5":[0,1],"126":[0],"127":[1,0],"128":[98],"129":[1,0],"130":[0],"131":[132],"133":[132],"134":[132],"135":[0],"136":[0],"31":[29],"4":[1,0],"137":[0],"30":[29],"138":[0],"46":[0],"44":[0],"139":[0],"140":[0],"141":[0],"142":[0],"47":[0],"143":[0],"144":[1,0],"145":[0],"146":[0],"147":[0],"148":[0],"149":[1,0],"150":[0],"151":[53],"152":[53],"54":[53],"153":[53],"154":[27],"155":[27]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","Item","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.Sprite","ItemData","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","TileCell","TileData","Tile","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","CartoonFX.CFXR_Effect","UnityEngine.Light","AnimatedTile","UnityEngine.GameObject","UnityEngine.TrailRenderer","StateEvents","PositionTracking","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BasicFade","UnityEngine.CanvasGroup","AppearAnimation","PlayerGuide","UnityEngine.UI.Button","GameManager","RectAnimator","TileManager","DynamitePowerup","DynamiteEffect","SpecialTileManager","TransformOrientation","UnityEngine.UI.HorizontalLayoutGroup","UIMoveTo","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","AnimatedTileSpawner","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MergeHands","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AudioManager","AudioLibrary","GameOrientationHandler","UnityEngine.Font","UnityEngine.AudioClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CartoonFX.CFXR_EmissionBySurface","CartoonFX.CFXR_ParticleText","Kino.Bloom","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2023.1.0f1";

Deserializers.productName = "Piggy Kingdom - Renovation";

Deserializers.lunaInitializationTime = "09/29/2025 07:36:59";

Deserializers.lunaDaysRunning = "3.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Renovation";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1941";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5487";

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

Deserializers.buildID = "f7eeea1c-175f-484c-97c9-496df99c368b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

