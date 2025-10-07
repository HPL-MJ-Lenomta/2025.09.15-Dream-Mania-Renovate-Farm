var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i19000 = root || request.c( 'UnityEngine.JointSpring' )
  var i19001 = data
  i19000.spring = i19001[0]
  i19000.damper = i19001[1]
  i19000.targetPosition = i19001[2]
  return i19000
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i19002 = root || request.c( 'UnityEngine.JointMotor' )
  var i19003 = data
  i19002.m_TargetVelocity = i19003[0]
  i19002.m_Force = i19003[1]
  i19002.m_FreeSpin = i19003[2]
  return i19002
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i19004 = root || request.c( 'UnityEngine.JointLimits' )
  var i19005 = data
  i19004.m_Min = i19005[0]
  i19004.m_Max = i19005[1]
  i19004.m_Bounciness = i19005[2]
  i19004.m_BounceMinVelocity = i19005[3]
  i19004.m_ContactDistance = i19005[4]
  i19004.minBounce = i19005[5]
  i19004.maxBounce = i19005[6]
  return i19004
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i19006 = root || request.c( 'UnityEngine.JointDrive' )
  var i19007 = data
  i19006.m_PositionSpring = i19007[0]
  i19006.m_PositionDamper = i19007[1]
  i19006.m_MaximumForce = i19007[2]
  i19006.m_UseAcceleration = i19007[3]
  return i19006
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i19008 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i19009 = data
  i19008.m_Spring = i19009[0]
  i19008.m_Damper = i19009[1]
  return i19008
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i19010 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i19011 = data
  i19010.m_Limit = i19011[0]
  i19010.m_Bounciness = i19011[1]
  i19010.m_ContactDistance = i19011[2]
  return i19010
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i19012 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i19013 = data
  i19012.m_ExtremumSlip = i19013[0]
  i19012.m_ExtremumValue = i19013[1]
  i19012.m_AsymptoteSlip = i19013[2]
  i19012.m_AsymptoteValue = i19013[3]
  i19012.m_Stiffness = i19013[4]
  return i19012
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i19014 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i19015 = data
  i19014.m_LowerAngle = i19015[0]
  i19014.m_UpperAngle = i19015[1]
  return i19014
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i19016 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i19017 = data
  i19016.m_MotorSpeed = i19017[0]
  i19016.m_MaximumMotorTorque = i19017[1]
  return i19016
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i19018 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i19019 = data
  i19018.m_DampingRatio = i19019[0]
  i19018.m_Frequency = i19019[1]
  i19018.m_Angle = i19019[2]
  return i19018
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i19020 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i19021 = data
  i19020.m_LowerTranslation = i19021[0]
  i19020.m_UpperTranslation = i19021[1]
  return i19020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i19022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i19023 = data
  i19022.name = i19023[0]
  i19022.width = i19023[1]
  i19022.height = i19023[2]
  i19022.mipmapCount = i19023[3]
  i19022.anisoLevel = i19023[4]
  i19022.filterMode = i19023[5]
  i19022.hdr = !!i19023[6]
  i19022.format = i19023[7]
  i19022.wrapMode = i19023[8]
  i19022.alphaIsTransparency = !!i19023[9]
  i19022.alphaSource = i19023[10]
  i19022.graphicsFormat = i19023[11]
  i19022.sRGBTexture = !!i19023[12]
  i19022.desiredColorSpace = i19023[13]
  i19022.wrapU = i19023[14]
  i19022.wrapV = i19023[15]
  return i19022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i19024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i19025 = data
  i19024.pivot = new pc.Vec2( i19025[0], i19025[1] )
  i19024.anchorMin = new pc.Vec2( i19025[2], i19025[3] )
  i19024.anchorMax = new pc.Vec2( i19025[4], i19025[5] )
  i19024.sizeDelta = new pc.Vec2( i19025[6], i19025[7] )
  i19024.anchoredPosition3D = new pc.Vec3( i19025[8], i19025[9], i19025[10] )
  i19024.rotation = new pc.Quat(i19025[11], i19025[12], i19025[13], i19025[14])
  i19024.scale = new pc.Vec3( i19025[15], i19025[16], i19025[17] )
  return i19024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i19026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i19027 = data
  i19026.cullTransparentMesh = !!i19027[0]
  return i19026
}

Deserializers["Item"] = function (request, data, root) {
  var i19028 = root || request.c( 'Item' )
  var i19029 = data
  request.r(i19029[0], i19029[1], 0, i19028, 'itemImage')
  request.r(i19029[2], i19029[3], 0, i19028, 'collectItemImage')
  request.r(i19029[4], i19029[5], 0, i19028, 'itemCountText')
  i19028.ItemCount = i19029[6]
  request.r(i19029[7], i19029[8], 0, i19028, 'completeSprite')
  request.r(i19029[9], i19029[10], 0, i19028, 'data')
  request.r(i19029[11], i19029[12], 0, i19028, 'UIMovement')
  request.r(i19029[13], i19029[14], 0, i19028, 'FurnitureImage')
  i19028.portraitLocation = new pc.Vec2( i19029[15], i19029[16] )
  i19028.landscapeLocation = new pc.Vec2( i19029[17], i19029[18] )
  return i19028
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i19030 = root || request.c( 'UnityEngine.UI.Image' )
  var i19031 = data
  request.r(i19031[0], i19031[1], 0, i19030, 'm_Sprite')
  i19030.m_Type = i19031[2]
  i19030.m_PreserveAspect = !!i19031[3]
  i19030.m_FillCenter = !!i19031[4]
  i19030.m_FillMethod = i19031[5]
  i19030.m_FillAmount = i19031[6]
  i19030.m_FillClockwise = !!i19031[7]
  i19030.m_FillOrigin = i19031[8]
  i19030.m_UseSpriteMesh = !!i19031[9]
  i19030.m_PixelsPerUnitMultiplier = i19031[10]
  request.r(i19031[11], i19031[12], 0, i19030, 'm_Material')
  i19030.m_Maskable = !!i19031[13]
  i19030.m_Color = new pc.Color(i19031[14], i19031[15], i19031[16], i19031[17])
  i19030.m_RaycastTarget = !!i19031[18]
  i19030.m_RaycastPadding = new pc.Vec4( i19031[19], i19031[20], i19031[21], i19031[22] )
  return i19030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i19032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i19033 = data
  i19032.name = i19033[0]
  i19032.tagId = i19033[1]
  i19032.enabled = !!i19033[2]
  i19032.isStatic = !!i19033[3]
  i19032.layer = i19033[4]
  return i19032
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i19034 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i19035 = data
  i19034.m_hasFontAssetChanged = !!i19035[0]
  request.r(i19035[1], i19035[2], 0, i19034, 'm_baseMaterial')
  i19034.m_maskOffset = new pc.Vec4( i19035[3], i19035[4], i19035[5], i19035[6] )
  i19034.m_text = i19035[7]
  i19034.m_isRightToLeft = !!i19035[8]
  request.r(i19035[9], i19035[10], 0, i19034, 'm_fontAsset')
  request.r(i19035[11], i19035[12], 0, i19034, 'm_sharedMaterial')
  var i19037 = i19035[13]
  var i19036 = []
  for(var i = 0; i < i19037.length; i += 2) {
  request.r(i19037[i + 0], i19037[i + 1], 2, i19036, '')
  }
  i19034.m_fontSharedMaterials = i19036
  request.r(i19035[14], i19035[15], 0, i19034, 'm_fontMaterial')
  var i19039 = i19035[16]
  var i19038 = []
  for(var i = 0; i < i19039.length; i += 2) {
  request.r(i19039[i + 0], i19039[i + 1], 2, i19038, '')
  }
  i19034.m_fontMaterials = i19038
  i19034.m_fontColor32 = UnityEngine.Color32.ConstructColor(i19035[17], i19035[18], i19035[19], i19035[20])
  i19034.m_fontColor = new pc.Color(i19035[21], i19035[22], i19035[23], i19035[24])
  i19034.m_enableVertexGradient = !!i19035[25]
  i19034.m_colorMode = i19035[26]
  i19034.m_fontColorGradient = request.d('TMPro.VertexGradient', i19035[27], i19034.m_fontColorGradient)
  request.r(i19035[28], i19035[29], 0, i19034, 'm_fontColorGradientPreset')
  request.r(i19035[30], i19035[31], 0, i19034, 'm_spriteAsset')
  i19034.m_tintAllSprites = !!i19035[32]
  request.r(i19035[33], i19035[34], 0, i19034, 'm_StyleSheet')
  i19034.m_TextStyleHashCode = i19035[35]
  i19034.m_overrideHtmlColors = !!i19035[36]
  i19034.m_faceColor = UnityEngine.Color32.ConstructColor(i19035[37], i19035[38], i19035[39], i19035[40])
  i19034.m_fontSize = i19035[41]
  i19034.m_fontSizeBase = i19035[42]
  i19034.m_fontWeight = i19035[43]
  i19034.m_enableAutoSizing = !!i19035[44]
  i19034.m_fontSizeMin = i19035[45]
  i19034.m_fontSizeMax = i19035[46]
  i19034.m_fontStyle = i19035[47]
  i19034.m_HorizontalAlignment = i19035[48]
  i19034.m_VerticalAlignment = i19035[49]
  i19034.m_textAlignment = i19035[50]
  i19034.m_characterSpacing = i19035[51]
  i19034.m_wordSpacing = i19035[52]
  i19034.m_lineSpacing = i19035[53]
  i19034.m_lineSpacingMax = i19035[54]
  i19034.m_paragraphSpacing = i19035[55]
  i19034.m_charWidthMaxAdj = i19035[56]
  i19034.m_enableWordWrapping = !!i19035[57]
  i19034.m_wordWrappingRatios = i19035[58]
  i19034.m_overflowMode = i19035[59]
  request.r(i19035[60], i19035[61], 0, i19034, 'm_linkedTextComponent')
  request.r(i19035[62], i19035[63], 0, i19034, 'parentLinkedComponent')
  i19034.m_enableKerning = !!i19035[64]
  i19034.m_enableExtraPadding = !!i19035[65]
  i19034.checkPaddingRequired = !!i19035[66]
  i19034.m_isRichText = !!i19035[67]
  i19034.m_parseCtrlCharacters = !!i19035[68]
  i19034.m_isOrthographic = !!i19035[69]
  i19034.m_isCullingEnabled = !!i19035[70]
  i19034.m_horizontalMapping = i19035[71]
  i19034.m_verticalMapping = i19035[72]
  i19034.m_uvLineOffset = i19035[73]
  i19034.m_geometrySortingOrder = i19035[74]
  i19034.m_IsTextObjectScaleStatic = !!i19035[75]
  i19034.m_VertexBufferAutoSizeReduction = !!i19035[76]
  i19034.m_useMaxVisibleDescender = !!i19035[77]
  i19034.m_pageToDisplay = i19035[78]
  i19034.m_margin = new pc.Vec4( i19035[79], i19035[80], i19035[81], i19035[82] )
  i19034.m_isUsingLegacyAnimationComponent = !!i19035[83]
  i19034.m_isVolumetricText = !!i19035[84]
  request.r(i19035[85], i19035[86], 0, i19034, 'm_Material')
  i19034.m_Maskable = !!i19035[87]
  i19034.m_Color = new pc.Color(i19035[88], i19035[89], i19035[90], i19035[91])
  i19034.m_RaycastTarget = !!i19035[92]
  i19034.m_RaycastPadding = new pc.Vec4( i19035[93], i19035[94], i19035[95], i19035[96] )
  return i19034
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i19042 = root || request.c( 'TMPro.VertexGradient' )
  var i19043 = data
  i19042.topLeft = new pc.Color(i19043[0], i19043[1], i19043[2], i19043[3])
  i19042.topRight = new pc.Color(i19043[4], i19043[5], i19043[6], i19043[7])
  i19042.bottomLeft = new pc.Color(i19043[8], i19043[9], i19043[10], i19043[11])
  i19042.bottomRight = new pc.Color(i19043[12], i19043[13], i19043[14], i19043[15])
  return i19042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i19044 = root || new pc.UnityMaterial()
  var i19045 = data
  i19044.name = i19045[0]
  request.r(i19045[1], i19045[2], 0, i19044, 'shader')
  i19044.renderQueue = i19045[3]
  i19044.enableInstancing = !!i19045[4]
  var i19047 = i19045[5]
  var i19046 = []
  for(var i = 0; i < i19047.length; i += 1) {
    i19046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i19047[i + 0]) );
  }
  i19044.floatParameters = i19046
  var i19049 = i19045[6]
  var i19048 = []
  for(var i = 0; i < i19049.length; i += 1) {
    i19048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i19049[i + 0]) );
  }
  i19044.colorParameters = i19048
  var i19051 = i19045[7]
  var i19050 = []
  for(var i = 0; i < i19051.length; i += 1) {
    i19050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i19051[i + 0]) );
  }
  i19044.vectorParameters = i19050
  var i19053 = i19045[8]
  var i19052 = []
  for(var i = 0; i < i19053.length; i += 1) {
    i19052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i19053[i + 0]) );
  }
  i19044.textureParameters = i19052
  var i19055 = i19045[9]
  var i19054 = []
  for(var i = 0; i < i19055.length; i += 1) {
    i19054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i19055[i + 0]) );
  }
  i19044.materialFlags = i19054
  return i19044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i19058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i19059 = data
  i19058.name = i19059[0]
  i19058.value = i19059[1]
  return i19058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i19062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i19063 = data
  i19062.name = i19063[0]
  i19062.value = new pc.Color(i19063[1], i19063[2], i19063[3], i19063[4])
  return i19062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i19066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i19067 = data
  i19066.name = i19067[0]
  i19066.value = new pc.Vec4( i19067[1], i19067[2], i19067[3], i19067[4] )
  return i19066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i19070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i19071 = data
  i19070.name = i19071[0]
  request.r(i19071[1], i19071[2], 0, i19070, 'value')
  return i19070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i19074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i19075 = data
  i19074.name = i19075[0]
  i19074.enabled = !!i19075[1]
  return i19074
}

Deserializers["TileCell"] = function (request, data, root) {
  var i19076 = root || request.c( 'TileCell' )
  var i19077 = data
  i19076.coordinate = new pc.Vec2( i19077[0], i19077[1] )
  i19076.TileBreakEvent = request.d('UnityEngine.Events.UnityEvent', i19077[2], i19076.TileBreakEvent)
  request.r(i19077[3], i19077[4], 0, i19076, 'tileData')
  request.r(i19077[5], i19077[6], 0, i19076, 'tile')
  return i19076
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i19078 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i19079 = data
  i19078.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i19079[0], i19078.m_PersistentCalls)
  return i19078
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i19080 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i19081 = data
  var i19083 = i19081[0]
  var i19082 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i19083.length; i += 1) {
    i19082.add(request.d('UnityEngine.Events.PersistentCall', i19083[i + 0]));
  }
  i19080.m_Calls = i19082
  return i19080
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i19086 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i19087 = data
  request.r(i19087[0], i19087[1], 0, i19086, 'm_Target')
  i19086.m_TargetAssemblyTypeName = i19087[2]
  i19086.m_MethodName = i19087[3]
  i19086.m_Mode = i19087[4]
  i19086.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i19087[5], i19086.m_Arguments)
  i19086.m_CallState = i19087[6]
  return i19086
}

Deserializers["Tile"] = function (request, data, root) {
  var i19088 = root || request.c( 'Tile' )
  var i19089 = data
  request.r(i19089[0], i19089[1], 0, i19088, 'itemImage')
  request.r(i19089[2], i19089[3], 0, i19088, 'tileData')
  i19088.MovementMagnitude = i19089[4]
  i19088.MovementDuration = i19089[5]
  return i19088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i19090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i19091 = data
  i19090.position = new pc.Vec3( i19091[0], i19091[1], i19091[2] )
  i19090.scale = new pc.Vec3( i19091[3], i19091[4], i19091[5] )
  i19090.rotation = new pc.Quat(i19091[6], i19091[7], i19091[8], i19091[9])
  return i19090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i19092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i19093 = data
  i19092.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i19093[0], i19092.main)
  i19092.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i19093[1], i19092.colorBySpeed)
  i19092.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i19093[2], i19092.colorOverLifetime)
  i19092.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i19093[3], i19092.emission)
  i19092.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i19093[4], i19092.rotationBySpeed)
  i19092.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i19093[5], i19092.rotationOverLifetime)
  i19092.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i19093[6], i19092.shape)
  i19092.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i19093[7], i19092.sizeBySpeed)
  i19092.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i19093[8], i19092.sizeOverLifetime)
  i19092.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i19093[9], i19092.textureSheetAnimation)
  i19092.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i19093[10], i19092.velocityOverLifetime)
  i19092.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i19093[11], i19092.noise)
  i19092.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i19093[12], i19092.inheritVelocity)
  i19092.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i19093[13], i19092.forceOverLifetime)
  i19092.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i19093[14], i19092.limitVelocityOverLifetime)
  i19092.useAutoRandomSeed = !!i19093[15]
  i19092.randomSeed = i19093[16]
  return i19092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i19094 = root || new pc.ParticleSystemMain()
  var i19095 = data
  i19094.duration = i19095[0]
  i19094.loop = !!i19095[1]
  i19094.prewarm = !!i19095[2]
  i19094.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19095[3], i19094.startDelay)
  i19094.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19095[4], i19094.startLifetime)
  i19094.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19095[5], i19094.startSpeed)
  i19094.startSize3D = !!i19095[6]
  i19094.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19095[7], i19094.startSizeX)
  i19094.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19095[8], i19094.startSizeY)
  i19094.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19095[9], i19094.startSizeZ)
  i19094.startRotation3D = !!i19095[10]
  i19094.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19095[11], i19094.startRotationX)
  i19094.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19095[12], i19094.startRotationY)
  i19094.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19095[13], i19094.startRotationZ)
  i19094.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i19095[14], i19094.startColor)
  i19094.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19095[15], i19094.gravityModifier)
  i19094.simulationSpace = i19095[16]
  request.r(i19095[17], i19095[18], 0, i19094, 'customSimulationSpace')
  i19094.simulationSpeed = i19095[19]
  i19094.useUnscaledTime = !!i19095[20]
  i19094.scalingMode = i19095[21]
  i19094.playOnAwake = !!i19095[22]
  i19094.maxParticles = i19095[23]
  i19094.emitterVelocityMode = i19095[24]
  i19094.stopAction = i19095[25]
  return i19094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i19096 = root || new pc.MinMaxCurve()
  var i19097 = data
  i19096.mode = i19097[0]
  i19096.curveMin = new pc.AnimationCurve( { keys_flow: i19097[1] } )
  i19096.curveMax = new pc.AnimationCurve( { keys_flow: i19097[2] } )
  i19096.curveMultiplier = i19097[3]
  i19096.constantMin = i19097[4]
  i19096.constantMax = i19097[5]
  return i19096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i19098 = root || new pc.MinMaxGradient()
  var i19099 = data
  i19098.mode = i19099[0]
  i19098.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i19099[1], i19098.gradientMin)
  i19098.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i19099[2], i19098.gradientMax)
  i19098.colorMin = new pc.Color(i19099[3], i19099[4], i19099[5], i19099[6])
  i19098.colorMax = new pc.Color(i19099[7], i19099[8], i19099[9], i19099[10])
  return i19098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i19100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i19101 = data
  i19100.mode = i19101[0]
  var i19103 = i19101[1]
  var i19102 = []
  for(var i = 0; i < i19103.length; i += 1) {
    i19102.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i19103[i + 0]) );
  }
  i19100.colorKeys = i19102
  var i19105 = i19101[2]
  var i19104 = []
  for(var i = 0; i < i19105.length; i += 1) {
    i19104.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i19105[i + 0]) );
  }
  i19100.alphaKeys = i19104
  return i19100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i19106 = root || new pc.ParticleSystemColorBySpeed()
  var i19107 = data
  i19106.enabled = !!i19107[0]
  i19106.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i19107[1], i19106.color)
  i19106.range = new pc.Vec2( i19107[2], i19107[3] )
  return i19106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i19110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i19111 = data
  i19110.color = new pc.Color(i19111[0], i19111[1], i19111[2], i19111[3])
  i19110.time = i19111[4]
  return i19110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i19114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i19115 = data
  i19114.alpha = i19115[0]
  i19114.time = i19115[1]
  return i19114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i19116 = root || new pc.ParticleSystemColorOverLifetime()
  var i19117 = data
  i19116.enabled = !!i19117[0]
  i19116.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i19117[1], i19116.color)
  return i19116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i19118 = root || new pc.ParticleSystemEmitter()
  var i19119 = data
  i19118.enabled = !!i19119[0]
  i19118.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19119[1], i19118.rateOverTime)
  i19118.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19119[2], i19118.rateOverDistance)
  var i19121 = i19119[3]
  var i19120 = []
  for(var i = 0; i < i19121.length; i += 1) {
    i19120.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i19121[i + 0]) );
  }
  i19118.bursts = i19120
  return i19118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i19124 = root || new pc.ParticleSystemBurst()
  var i19125 = data
  i19124.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19125[0], i19124.count)
  i19124.cycleCount = i19125[1]
  i19124.minCount = i19125[2]
  i19124.maxCount = i19125[3]
  i19124.repeatInterval = i19125[4]
  i19124.time = i19125[5]
  return i19124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i19126 = root || new pc.ParticleSystemRotationBySpeed()
  var i19127 = data
  i19126.enabled = !!i19127[0]
  i19126.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19127[1], i19126.x)
  i19126.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19127[2], i19126.y)
  i19126.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19127[3], i19126.z)
  i19126.separateAxes = !!i19127[4]
  i19126.range = new pc.Vec2( i19127[5], i19127[6] )
  return i19126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i19128 = root || new pc.ParticleSystemRotationOverLifetime()
  var i19129 = data
  i19128.enabled = !!i19129[0]
  i19128.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19129[1], i19128.x)
  i19128.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19129[2], i19128.y)
  i19128.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19129[3], i19128.z)
  i19128.separateAxes = !!i19129[4]
  return i19128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i19130 = root || new pc.ParticleSystemShape()
  var i19131 = data
  i19130.enabled = !!i19131[0]
  i19130.shapeType = i19131[1]
  i19130.randomDirectionAmount = i19131[2]
  i19130.sphericalDirectionAmount = i19131[3]
  i19130.randomPositionAmount = i19131[4]
  i19130.alignToDirection = !!i19131[5]
  i19130.radius = i19131[6]
  i19130.radiusMode = i19131[7]
  i19130.radiusSpread = i19131[8]
  i19130.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19131[9], i19130.radiusSpeed)
  i19130.radiusThickness = i19131[10]
  i19130.angle = i19131[11]
  i19130.length = i19131[12]
  i19130.boxThickness = new pc.Vec3( i19131[13], i19131[14], i19131[15] )
  i19130.meshShapeType = i19131[16]
  request.r(i19131[17], i19131[18], 0, i19130, 'mesh')
  request.r(i19131[19], i19131[20], 0, i19130, 'meshRenderer')
  request.r(i19131[21], i19131[22], 0, i19130, 'skinnedMeshRenderer')
  i19130.useMeshMaterialIndex = !!i19131[23]
  i19130.meshMaterialIndex = i19131[24]
  i19130.useMeshColors = !!i19131[25]
  i19130.normalOffset = i19131[26]
  i19130.arc = i19131[27]
  i19130.arcMode = i19131[28]
  i19130.arcSpread = i19131[29]
  i19130.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19131[30], i19130.arcSpeed)
  i19130.donutRadius = i19131[31]
  i19130.position = new pc.Vec3( i19131[32], i19131[33], i19131[34] )
  i19130.rotation = new pc.Vec3( i19131[35], i19131[36], i19131[37] )
  i19130.scale = new pc.Vec3( i19131[38], i19131[39], i19131[40] )
  return i19130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i19132 = root || new pc.ParticleSystemSizeBySpeed()
  var i19133 = data
  i19132.enabled = !!i19133[0]
  i19132.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19133[1], i19132.x)
  i19132.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19133[2], i19132.y)
  i19132.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19133[3], i19132.z)
  i19132.separateAxes = !!i19133[4]
  i19132.range = new pc.Vec2( i19133[5], i19133[6] )
  return i19132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i19134 = root || new pc.ParticleSystemSizeOverLifetime()
  var i19135 = data
  i19134.enabled = !!i19135[0]
  i19134.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19135[1], i19134.x)
  i19134.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19135[2], i19134.y)
  i19134.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19135[3], i19134.z)
  i19134.separateAxes = !!i19135[4]
  return i19134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i19136 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i19137 = data
  i19136.enabled = !!i19137[0]
  i19136.mode = i19137[1]
  i19136.animation = i19137[2]
  i19136.numTilesX = i19137[3]
  i19136.numTilesY = i19137[4]
  i19136.useRandomRow = !!i19137[5]
  i19136.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19137[6], i19136.frameOverTime)
  i19136.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19137[7], i19136.startFrame)
  i19136.cycleCount = i19137[8]
  i19136.rowIndex = i19137[9]
  i19136.flipU = i19137[10]
  i19136.flipV = i19137[11]
  i19136.spriteCount = i19137[12]
  var i19139 = i19137[13]
  var i19138 = []
  for(var i = 0; i < i19139.length; i += 2) {
  request.r(i19139[i + 0], i19139[i + 1], 2, i19138, '')
  }
  i19136.sprites = i19138
  return i19136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i19142 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i19143 = data
  i19142.enabled = !!i19143[0]
  i19142.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19143[1], i19142.x)
  i19142.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19143[2], i19142.y)
  i19142.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19143[3], i19142.z)
  i19142.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19143[4], i19142.radial)
  i19142.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19143[5], i19142.speedModifier)
  i19142.space = i19143[6]
  i19142.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19143[7], i19142.orbitalX)
  i19142.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19143[8], i19142.orbitalY)
  i19142.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19143[9], i19142.orbitalZ)
  i19142.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19143[10], i19142.orbitalOffsetX)
  i19142.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19143[11], i19142.orbitalOffsetY)
  i19142.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19143[12], i19142.orbitalOffsetZ)
  return i19142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i19144 = root || new pc.ParticleSystemNoise()
  var i19145 = data
  i19144.enabled = !!i19145[0]
  i19144.separateAxes = !!i19145[1]
  i19144.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19145[2], i19144.strengthX)
  i19144.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19145[3], i19144.strengthY)
  i19144.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19145[4], i19144.strengthZ)
  i19144.frequency = i19145[5]
  i19144.damping = !!i19145[6]
  i19144.octaveCount = i19145[7]
  i19144.octaveMultiplier = i19145[8]
  i19144.octaveScale = i19145[9]
  i19144.quality = i19145[10]
  i19144.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19145[11], i19144.scrollSpeed)
  i19144.scrollSpeedMultiplier = i19145[12]
  i19144.remapEnabled = !!i19145[13]
  i19144.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19145[14], i19144.remapX)
  i19144.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19145[15], i19144.remapY)
  i19144.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19145[16], i19144.remapZ)
  i19144.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19145[17], i19144.positionAmount)
  i19144.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19145[18], i19144.rotationAmount)
  i19144.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19145[19], i19144.sizeAmount)
  return i19144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i19146 = root || new pc.ParticleSystemInheritVelocity()
  var i19147 = data
  i19146.enabled = !!i19147[0]
  i19146.mode = i19147[1]
  i19146.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19147[2], i19146.curve)
  return i19146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i19148 = root || new pc.ParticleSystemForceOverLifetime()
  var i19149 = data
  i19148.enabled = !!i19149[0]
  i19148.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19149[1], i19148.x)
  i19148.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19149[2], i19148.y)
  i19148.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19149[3], i19148.z)
  i19148.space = i19149[4]
  i19148.randomized = !!i19149[5]
  return i19148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i19150 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i19151 = data
  i19150.enabled = !!i19151[0]
  i19150.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19151[1], i19150.limit)
  i19150.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19151[2], i19150.limitX)
  i19150.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19151[3], i19150.limitY)
  i19150.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19151[4], i19150.limitZ)
  i19150.dampen = i19151[5]
  i19150.separateAxes = !!i19151[6]
  i19150.space = i19151[7]
  i19150.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i19151[8], i19150.drag)
  i19150.multiplyDragByParticleSize = !!i19151[9]
  i19150.multiplyDragByParticleVelocity = !!i19151[10]
  return i19150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i19152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i19153 = data
  i19152.enabled = !!i19153[0]
  request.r(i19153[1], i19153[2], 0, i19152, 'sharedMaterial')
  var i19155 = i19153[3]
  var i19154 = []
  for(var i = 0; i < i19155.length; i += 2) {
  request.r(i19155[i + 0], i19155[i + 1], 2, i19154, '')
  }
  i19152.sharedMaterials = i19154
  i19152.receiveShadows = !!i19153[4]
  i19152.shadowCastingMode = i19153[5]
  i19152.sortingLayerID = i19153[6]
  i19152.sortingOrder = i19153[7]
  i19152.lightmapIndex = i19153[8]
  i19152.lightmapSceneIndex = i19153[9]
  i19152.lightmapScaleOffset = new pc.Vec4( i19153[10], i19153[11], i19153[12], i19153[13] )
  i19152.lightProbeUsage = i19153[14]
  i19152.reflectionProbeUsage = i19153[15]
  request.r(i19153[16], i19153[17], 0, i19152, 'mesh')
  i19152.meshCount = i19153[18]
  i19152.activeVertexStreamsCount = i19153[19]
  i19152.alignment = i19153[20]
  i19152.renderMode = i19153[21]
  i19152.sortMode = i19153[22]
  i19152.lengthScale = i19153[23]
  i19152.velocityScale = i19153[24]
  i19152.cameraVelocityScale = i19153[25]
  i19152.normalDirection = i19153[26]
  i19152.sortingFudge = i19153[27]
  i19152.minParticleSize = i19153[28]
  i19152.maxParticleSize = i19153[29]
  i19152.pivot = new pc.Vec3( i19153[30], i19153[31], i19153[32] )
  request.r(i19153[33], i19153[34], 0, i19152, 'trailMaterial')
  return i19152
}

Deserializers["CartoonFX.CFXR_Effect"] = function (request, data, root) {
  var i19156 = root || request.c( 'CartoonFX.CFXR_Effect' )
  var i19157 = data
  i19156.clearBehavior = i19157[0]
  i19156.cameraShake = request.d('CartoonFX.CFXR_Effect+CameraShake', i19157[1], i19156.cameraShake)
  var i19159 = i19157[2]
  var i19158 = []
  for(var i = 0; i < i19159.length; i += 1) {
    i19158.push( request.d('CartoonFX.CFXR_Effect+AnimatedLight', i19159[i + 0]) );
  }
  i19156.animatedLights = i19158
  request.r(i19157[3], i19157[4], 0, i19156, 'fadeOutReference')
  return i19156
}

Deserializers["CartoonFX.CFXR_Effect+CameraShake"] = function (request, data, root) {
  var i19160 = root || request.c( 'CartoonFX.CFXR_Effect+CameraShake' )
  var i19161 = data
  i19160.camEnabled = !!i19161[0]
  i19160.useMainCamera = !!i19161[1]
  var i19163 = i19161[2]
  var i19162 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i19163.length; i += 2) {
  request.r(i19163[i + 0], i19163[i + 1], 1, i19162, '')
  }
  i19160.cameras = i19162
  i19160.delay = i19161[3]
  i19160.duration = i19161[4]
  i19160.shakeSpace = i19161[5]
  i19160.shakeStrength = new pc.Vec3( i19161[6], i19161[7], i19161[8] )
  i19160.shakeCurve = new pc.AnimationCurve( { keys_flow: i19161[9] } )
  i19160.shakesDelay = i19161[10]
  return i19160
}

Deserializers["CartoonFX.CFXR_Effect+AnimatedLight"] = function (request, data, root) {
  var i19168 = root || request.c( 'CartoonFX.CFXR_Effect+AnimatedLight' )
  var i19169 = data
  request.r(i19169[0], i19169[1], 0, i19168, 'light')
  i19168.loop = !!i19169[2]
  i19168.animateIntensity = !!i19169[3]
  i19168.intensityStart = i19169[4]
  i19168.intensityEnd = i19169[5]
  i19168.intensityDuration = i19169[6]
  i19168.intensityCurve = new pc.AnimationCurve( { keys_flow: i19169[7] } )
  i19168.perlinIntensity = !!i19169[8]
  i19168.perlinIntensitySpeed = i19169[9]
  i19168.fadeIn = !!i19169[10]
  i19168.fadeInDuration = i19169[11]
  i19168.fadeOut = !!i19169[12]
  i19168.fadeOutDuration = i19169[13]
  i19168.animateRange = !!i19169[14]
  i19168.rangeStart = i19169[15]
  i19168.rangeEnd = i19169[16]
  i19168.rangeDuration = i19169[17]
  i19168.rangeCurve = new pc.AnimationCurve( { keys_flow: i19169[18] } )
  i19168.perlinRange = !!i19169[19]
  i19168.perlinRangeSpeed = i19169[20]
  i19168.animateColor = !!i19169[21]
  i19168.colorGradient = i19169[22] ? new pc.ColorGradient(i19169[22][0], i19169[22][1], i19169[22][2]) : null
  i19168.colorDuration = i19169[23]
  i19168.colorCurve = new pc.AnimationCurve( { keys_flow: i19169[24] } )
  i19168.perlinColor = !!i19169[25]
  i19168.perlinColorSpeed = i19169[26]
  return i19168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i19170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i19171 = data
  i19170.enabled = !!i19171[0]
  i19170.type = i19171[1]
  i19170.color = new pc.Color(i19171[2], i19171[3], i19171[4], i19171[5])
  i19170.cullingMask = i19171[6]
  i19170.intensity = i19171[7]
  i19170.range = i19171[8]
  i19170.spotAngle = i19171[9]
  i19170.shadows = i19171[10]
  i19170.shadowNormalBias = i19171[11]
  i19170.shadowBias = i19171[12]
  i19170.shadowStrength = i19171[13]
  i19170.shadowResolution = i19171[14]
  i19170.lightmapBakeType = i19171[15]
  i19170.renderMode = i19171[16]
  request.r(i19171[17], i19171[18], 0, i19170, 'cookie')
  i19170.cookieSize = i19171[19]
  return i19170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i19172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i19173 = data
  i19172.name = i19173[0]
  i19172.halfPrecision = !!i19173[1]
  i19172.useUInt32IndexFormat = !!i19173[2]
  i19172.vertexCount = i19173[3]
  i19172.aabb = i19173[4]
  var i19175 = i19173[5]
  var i19174 = []
  for(var i = 0; i < i19175.length; i += 1) {
    i19174.push( !!i19175[i + 0] );
  }
  i19172.streams = i19174
  i19172.vertices = i19173[6]
  var i19177 = i19173[7]
  var i19176 = []
  for(var i = 0; i < i19177.length; i += 1) {
    i19176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i19177[i + 0]) );
  }
  i19172.subMeshes = i19176
  var i19179 = i19173[8]
  var i19178 = []
  for(var i = 0; i < i19179.length; i += 16) {
    i19178.push( new pc.Mat4().setData(i19179[i + 0], i19179[i + 1], i19179[i + 2], i19179[i + 3],  i19179[i + 4], i19179[i + 5], i19179[i + 6], i19179[i + 7],  i19179[i + 8], i19179[i + 9], i19179[i + 10], i19179[i + 11],  i19179[i + 12], i19179[i + 13], i19179[i + 14], i19179[i + 15]) );
  }
  i19172.bindposes = i19178
  var i19181 = i19173[9]
  var i19180 = []
  for(var i = 0; i < i19181.length; i += 1) {
    i19180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i19181[i + 0]) );
  }
  i19172.blendShapes = i19180
  return i19172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i19186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i19187 = data
  i19186.triangles = i19187[0]
  return i19186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i19192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i19193 = data
  i19192.name = i19193[0]
  var i19195 = i19193[1]
  var i19194 = []
  for(var i = 0; i < i19195.length; i += 1) {
    i19194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i19195[i + 0]) );
  }
  i19192.frames = i19194
  return i19192
}

Deserializers["AnimatedTile"] = function (request, data, root) {
  var i19196 = root || request.c( 'AnimatedTile' )
  var i19197 = data
  i19196.Duration = i19197[0]
  request.r(i19197[1], i19197[2], 0, i19196, 'tileData')
  var i19199 = i19197[3]
  var i19198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i19199.length; i += 3) {
    i19198.add(new pc.Vec3( i19199[i + 0], i19199[i + 1], i19199[i + 2] ));
  }
  i19196.targetPos = i19198
  var i19201 = i19197[4]
  var i19200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i19201.length; i += 3) {
    i19200.add(new pc.Vec3( i19201[i + 0], i19201[i + 1], i19201[i + 2] ));
  }
  i19196.targetPosPortrait = i19200
  var i19203 = i19197[5]
  var i19202 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i19203.length; i += 3) {
    i19202.add(new pc.Vec3( i19203[i + 0], i19203[i + 1], i19203[i + 2] ));
  }
  i19196.targetPosLandscape = i19202
  var i19205 = i19197[6]
  var i19204 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i19205.length; i += 1) {
    i19204.add(i19205[i + 0]);
  }
  i19196.targets = i19204
  request.r(i19197[7], i19197[8], 0, i19196, 'image')
  var i19207 = i19197[9]
  var i19206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i19207.length; i += 2) {
  request.r(i19207[i + 0], i19207[i + 1], 1, i19206, '')
  }
  i19196.vfxParticles = i19206
  request.r(i19197[10], i19197[11], 0, i19196, 'trailVFXPrefab')
  request.r(i19197[12], i19197[13], 0, i19196, 'circleTrailVFXPrefab')
  request.r(i19197[14], i19197[15], 0, i19196, 'trailRenderer')
  return i19196
}

Deserializers["StateEvents"] = function (request, data, root) {
  var i19214 = root || request.c( 'StateEvents' )
  var i19215 = data
  i19214.OnEnableEvent = request.d('UnityEngine.Events.UnityEvent', i19215[0], i19214.OnEnableEvent)
  i19214.OnDisableEvent = request.d('UnityEngine.Events.UnityEvent', i19215[1], i19214.OnDisableEvent)
  i19214.OnStartEvent = request.d('UnityEngine.Events.UnityEvent', i19215[2], i19214.OnStartEvent)
  i19214.autoEnable = !!i19215[3]
  i19214.autoEnableDelay = i19215[4]
  i19214.autoDisableDelay = i19215[5]
  return i19214
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i19216 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i19217 = data
  request.r(i19217[0], i19217[1], 0, i19216, 'm_ObjectArgument')
  i19216.m_ObjectArgumentAssemblyTypeName = i19217[2]
  i19216.m_IntArgument = i19217[3]
  i19216.m_FloatArgument = i19217[4]
  i19216.m_StringArgument = i19217[5]
  i19216.m_BoolArgument = !!i19217[6]
  return i19216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i19218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i19219 = data
  i19218.enabled = !!i19219[0]
  request.r(i19219[1], i19219[2], 0, i19218, 'sharedMaterial')
  var i19221 = i19219[3]
  var i19220 = []
  for(var i = 0; i < i19221.length; i += 2) {
  request.r(i19221[i + 0], i19221[i + 1], 2, i19220, '')
  }
  i19218.sharedMaterials = i19220
  i19218.receiveShadows = !!i19219[4]
  i19218.shadowCastingMode = i19219[5]
  i19218.sortingLayerID = i19219[6]
  i19218.sortingOrder = i19219[7]
  i19218.lightmapIndex = i19219[8]
  i19218.lightmapSceneIndex = i19219[9]
  i19218.lightmapScaleOffset = new pc.Vec4( i19219[10], i19219[11], i19219[12], i19219[13] )
  i19218.lightProbeUsage = i19219[14]
  i19218.reflectionProbeUsage = i19219[15]
  var i19223 = i19219[16]
  var i19222 = []
  for(var i = 0; i < i19223.length; i += 3) {
    i19222.push( new pc.Vec3( i19223[i + 0], i19223[i + 1], i19223[i + 2] ) );
  }
  i19218.positions = i19222
  i19218.positionCount = i19219[17]
  i19218.time = i19219[18]
  i19218.startWidth = i19219[19]
  i19218.endWidth = i19219[20]
  i19218.widthMultiplier = i19219[21]
  i19218.autodestruct = !!i19219[22]
  i19218.emitting = !!i19219[23]
  i19218.numCornerVertices = i19219[24]
  i19218.numCapVertices = i19219[25]
  i19218.minVertexDistance = i19219[26]
  i19218.colorGradient = i19219[27] ? new pc.ColorGradient(i19219[27][0], i19219[27][1], i19219[27][2]) : null
  i19218.startColor = new pc.Color(i19219[28], i19219[29], i19219[30], i19219[31])
  i19218.endColor = new pc.Color(i19219[32], i19219[33], i19219[34], i19219[35])
  i19218.generateLightingData = !!i19219[36]
  i19218.textureMode = i19219[37]
  i19218.alignment = i19219[38]
  i19218.widthCurve = new pc.AnimationCurve( { keys_flow: i19219[39] } )
  return i19218
}

Deserializers["PositionTracking"] = function (request, data, root) {
  var i19226 = root || request.c( 'PositionTracking' )
  var i19227 = data
  return i19226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i19228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i19229 = data
  i19228.name = i19229[0]
  i19228.index = i19229[1]
  i19228.startup = !!i19229[2]
  return i19228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i19230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i19231 = data
  i19230.enabled = !!i19231[0]
  i19230.aspect = i19231[1]
  i19230.orthographic = !!i19231[2]
  i19230.orthographicSize = i19231[3]
  i19230.backgroundColor = new pc.Color(i19231[4], i19231[5], i19231[6], i19231[7])
  i19230.nearClipPlane = i19231[8]
  i19230.farClipPlane = i19231[9]
  i19230.fieldOfView = i19231[10]
  i19230.depth = i19231[11]
  i19230.clearFlags = i19231[12]
  i19230.cullingMask = i19231[13]
  i19230.rect = i19231[14]
  request.r(i19231[15], i19231[16], 0, i19230, 'targetTexture')
  i19230.usePhysicalProperties = !!i19231[17]
  i19230.focalLength = i19231[18]
  i19230.sensorSize = new pc.Vec2( i19231[19], i19231[20] )
  i19230.lensShift = new pc.Vec2( i19231[21], i19231[22] )
  i19230.gateFit = i19231[23]
  i19230.commandBufferCount = i19231[24]
  i19230.cameraType = i19231[25]
  return i19230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i19232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i19233 = data
  i19232.enabled = !!i19233[0]
  i19232.planeDistance = i19233[1]
  i19232.referencePixelsPerUnit = i19233[2]
  i19232.isFallbackOverlay = !!i19233[3]
  i19232.renderMode = i19233[4]
  i19232.renderOrder = i19233[5]
  i19232.sortingLayerName = i19233[6]
  i19232.sortingOrder = i19233[7]
  i19232.scaleFactor = i19233[8]
  request.r(i19233[9], i19233[10], 0, i19232, 'worldCamera')
  i19232.overrideSorting = !!i19233[11]
  i19232.pixelPerfect = !!i19233[12]
  i19232.targetDisplay = i19233[13]
  i19232.overridePixelPerfect = !!i19233[14]
  return i19232
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i19234 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i19235 = data
  i19234.m_UiScaleMode = i19235[0]
  i19234.m_ReferencePixelsPerUnit = i19235[1]
  i19234.m_ScaleFactor = i19235[2]
  i19234.m_ReferenceResolution = new pc.Vec2( i19235[3], i19235[4] )
  i19234.m_ScreenMatchMode = i19235[5]
  i19234.m_MatchWidthOrHeight = i19235[6]
  i19234.m_PhysicalUnit = i19235[7]
  i19234.m_FallbackScreenDPI = i19235[8]
  i19234.m_DefaultSpriteDPI = i19235[9]
  i19234.m_DynamicPixelsPerUnit = i19235[10]
  i19234.m_PresetInfoIsWorld = !!i19235[11]
  return i19234
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i19236 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i19237 = data
  i19236.m_IgnoreReversedGraphics = !!i19237[0]
  i19236.m_BlockingObjects = i19237[1]
  i19236.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i19237[2] )
  return i19236
}

Deserializers["BasicFade"] = function (request, data, root) {
  var i19238 = root || request.c( 'BasicFade' )
  var i19239 = data
  request.r(i19239[0], i19239[1], 0, i19238, 'canvasGroup')
  i19238.duration = i19239[2]
  return i19238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i19240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i19241 = data
  i19240.m_Alpha = i19241[0]
  i19240.m_Interactable = !!i19241[1]
  i19240.m_BlocksRaycasts = !!i19241[2]
  i19240.m_IgnoreParentGroups = !!i19241[3]
  i19240.enabled = !!i19241[4]
  return i19240
}

Deserializers["AppearAnimation"] = function (request, data, root) {
  var i19242 = root || request.c( 'AppearAnimation' )
  var i19243 = data
  i19242.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i19243[0], i19242.OnMovementComplete)
  i19242.fadeInDuration = i19243[1]
  i19242.fadeInDelay = i19243[2]
  i19242.fillDuration = i19243[3]
  i19242.fillDelay = i19243[4]
  i19242.targetFillAmount = i19243[5]
  i19242.initialFillAmount = i19243[6]
  return i19242
}

Deserializers["PlayerGuide"] = function (request, data, root) {
  var i19244 = root || request.c( 'PlayerGuide' )
  var i19245 = data
  var i19247 = i19245[0]
  var i19246 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i19247.length; i += 2) {
  request.r(i19247[i + 0], i19247[i + 1], 1, i19246, '')
  }
  i19244.prompts = i19246
  return i19244
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i19250 = root || request.c( 'UnityEngine.UI.Button' )
  var i19251 = data
  i19250.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i19251[0], i19250.m_OnClick)
  i19250.m_Navigation = request.d('UnityEngine.UI.Navigation', i19251[1], i19250.m_Navigation)
  i19250.m_Transition = i19251[2]
  i19250.m_Colors = request.d('UnityEngine.UI.ColorBlock', i19251[3], i19250.m_Colors)
  i19250.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i19251[4], i19250.m_SpriteState)
  i19250.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i19251[5], i19250.m_AnimationTriggers)
  i19250.m_Interactable = !!i19251[6]
  request.r(i19251[7], i19251[8], 0, i19250, 'm_TargetGraphic')
  return i19250
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i19252 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i19253 = data
  i19252.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i19253[0], i19252.m_PersistentCalls)
  return i19252
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i19254 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i19255 = data
  i19254.m_Mode = i19255[0]
  i19254.m_WrapAround = !!i19255[1]
  request.r(i19255[2], i19255[3], 0, i19254, 'm_SelectOnUp')
  request.r(i19255[4], i19255[5], 0, i19254, 'm_SelectOnDown')
  request.r(i19255[6], i19255[7], 0, i19254, 'm_SelectOnLeft')
  request.r(i19255[8], i19255[9], 0, i19254, 'm_SelectOnRight')
  return i19254
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i19256 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i19257 = data
  i19256.m_NormalColor = new pc.Color(i19257[0], i19257[1], i19257[2], i19257[3])
  i19256.m_HighlightedColor = new pc.Color(i19257[4], i19257[5], i19257[6], i19257[7])
  i19256.m_PressedColor = new pc.Color(i19257[8], i19257[9], i19257[10], i19257[11])
  i19256.m_SelectedColor = new pc.Color(i19257[12], i19257[13], i19257[14], i19257[15])
  i19256.m_DisabledColor = new pc.Color(i19257[16], i19257[17], i19257[18], i19257[19])
  i19256.m_ColorMultiplier = i19257[20]
  i19256.m_FadeDuration = i19257[21]
  return i19256
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i19258 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i19259 = data
  request.r(i19259[0], i19259[1], 0, i19258, 'm_HighlightedSprite')
  request.r(i19259[2], i19259[3], 0, i19258, 'm_PressedSprite')
  request.r(i19259[4], i19259[5], 0, i19258, 'm_SelectedSprite')
  request.r(i19259[6], i19259[7], 0, i19258, 'm_DisabledSprite')
  return i19258
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i19260 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i19261 = data
  i19260.m_NormalTrigger = i19261[0]
  i19260.m_HighlightedTrigger = i19261[1]
  i19260.m_PressedTrigger = i19261[2]
  i19260.m_SelectedTrigger = i19261[3]
  i19260.m_DisabledTrigger = i19261[4]
  return i19260
}

Deserializers["RectAnimator"] = function (request, data, root) {
  var i19262 = root || request.c( 'RectAnimator' )
  var i19263 = data
  request.r(i19263[0], i19263[1], 0, i19262, 'rectTransform')
  i19262.animateScale = !!i19263[2]
  i19262.isScaleLooping = !!i19263[3]
  i19262.scaleTo = i19263[4]
  i19262.scaleDuration = i19263[5]
  i19262.scaleEaseType = i19263[6]
  i19262.scaleStartDelay = i19263[7]
  i19262.animateMove = !!i19263[8]
  i19262.isMoveLooping = !!i19263[9]
  i19262.moveTo = new pc.Vec2( i19263[10], i19263[11] )
  i19262.moveDuration = i19263[12]
  i19262.moveEaseType = i19263[13]
  i19262.moveLoopType = i19263[14]
  i19262.moveStartDelay = i19263[15]
  i19262.initialPos = new pc.Vec3( i19263[16], i19263[17], i19263[18] )
  i19262.initialScale = new pc.Vec3( i19263[19], i19263[20], i19263[21] )
  return i19262
}

Deserializers["TileManager"] = function (request, data, root) {
  var i19264 = root || request.c( 'TileManager' )
  var i19265 = data
  i19264.cellWidth = i19265[0]
  i19264.cellHeight = i19265[1]
  request.r(i19265[2], i19265[3], 0, i19264, 'canvasGroup')
  var i19267 = i19265[4]
  var i19266 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i19267.length; i += 2) {
  request.r(i19267[i + 0], i19267[i + 1], 1, i19266, '')
  }
  i19264.cells = i19266
  var i19269 = i19265[5]
  var i19268 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i19269.length; i += 2) {
  request.r(i19269[i + 0], i19269[i + 1], 1, i19268, '')
  }
  i19264.tileDataPool = i19268
  i19264.GridHeight = i19265[6]
  i19264.SequenceDelay = i19265[7]
  i19264.BreakDelay = i19265[8]
  i19264.FallDelay = i19265[9]
  i19264.CheckDelay = i19265[10]
  i19264.levelColorValues = i19265[11]
  var i19271 = i19265[12]
  var i19270 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i19271.length; i += 2) {
  request.r(i19271[i + 0], i19271[i + 1], 1, i19270, '')
  }
  i19264.powerupDataPool = i19270
  request.r(i19265[13], i19265[14], 0, i19264, 'dynamitePowerup')
  return i19264
}

Deserializers["SpecialTileManager"] = function (request, data, root) {
  var i19276 = root || request.c( 'SpecialTileManager' )
  var i19277 = data
  request.r(i19277[0], i19277[1], 0, i19276, 'tileManager')
  var i19279 = i19277[2]
  var i19278 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i19279.length; i += 2) {
  request.r(i19279[i + 0], i19279[i + 1], 1, i19278, '')
  }
  i19276.cellList = i19278
  var i19281 = i19277[3]
  var i19280 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonGraphic')))
  for(var i = 0; i < i19281.length; i += 2) {
  request.r(i19281[i + 0], i19281[i + 1], 1, i19280, '')
  }
  i19276.SpecialTiles = i19280
  i19276.specialTileTargetPos = i19277[4]
  i19276.pigPos = i19277[5]
  i19276.chickenPos = i19277[6]
  return i19276
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i19284 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i19285 = data
  i19284.m_Spacing = i19285[0]
  i19284.m_ChildForceExpandWidth = !!i19285[1]
  i19284.m_ChildForceExpandHeight = !!i19285[2]
  i19284.m_ChildControlWidth = !!i19285[3]
  i19284.m_ChildControlHeight = !!i19285[4]
  i19284.m_ChildScaleWidth = !!i19285[5]
  i19284.m_ChildScaleHeight = !!i19285[6]
  i19284.m_ReverseArrangement = !!i19285[7]
  i19284.m_Padding = UnityEngine.RectOffset.FromPaddings(i19285[8], i19285[9], i19285[10], i19285[11])
  i19284.m_ChildAlignment = i19285[12]
  return i19284
}

Deserializers["UIMoveTo"] = function (request, data, root) {
  var i19286 = root || request.c( 'UIMoveTo' )
  var i19287 = data
  request.r(i19287[0], i19287[1], 0, i19286, 'imageTransform')
  i19286.targetPosition = new pc.Vec2( i19287[2], i19287[3] )
  i19286.anticipationOffset = i19287[4]
  i19286.duration = i19287[5]
  i19286.enableOnStart = !!i19287[6]
  i19286.delayBeforeStart = i19287[7]
  i19286.delayBeforeEnd = i19287[8]
  i19286.OnMovementStart = request.d('UnityEngine.Events.UnityEvent', i19287[9], i19286.OnMovementStart)
  i19286.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i19287[10], i19286.OnMovementComplete)
  var i19289 = i19287[11]
  var i19288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i19289.length; i += 2) {
  request.r(i19289[i + 0], i19289[i + 1], 1, i19288, '')
  }
  i19286.objectsToEnable = i19288
  return i19286
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i19290 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i19291 = data
  i19290.m_StartCorner = i19291[0]
  i19290.m_StartAxis = i19291[1]
  i19290.m_CellSize = new pc.Vec2( i19291[2], i19291[3] )
  i19290.m_Spacing = new pc.Vec2( i19291[4], i19291[5] )
  i19290.m_Constraint = i19291[6]
  i19290.m_ConstraintCount = i19291[7]
  i19290.m_Padding = UnityEngine.RectOffset.FromPaddings(i19291[8], i19291[9], i19291[10], i19291[11])
  i19290.m_ChildAlignment = i19291[12]
  return i19290
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i19292 = root || request.c( 'UnityEngine.UI.Mask' )
  var i19293 = data
  i19292.m_ShowMaskGraphic = !!i19293[0]
  return i19292
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i19294 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i19295 = data
  request.r(i19295[0], i19295[1], 0, i19294, 'skeletonDataAsset')
  request.r(i19295[2], i19295[3], 0, i19294, 'additiveMaterial')
  request.r(i19295[4], i19295[5], 0, i19294, 'multiplyMaterial')
  request.r(i19295[6], i19295[7], 0, i19294, 'screenMaterial')
  i19294.initialSkinName = i19295[8]
  i19294.initialFlipX = !!i19295[9]
  i19294.initialFlipY = !!i19295[10]
  i19294.startingAnimation = i19295[11]
  i19294.startingLoop = !!i19295[12]
  i19294.timeScale = i19295[13]
  i19294.freeze = !!i19295[14]
  i19294.layoutScaleMode = i19295[15]
  i19294.updateWhenInvisible = i19295[16]
  i19294.allowMultipleCanvasRenderers = !!i19295[17]
  var i19297 = i19295[18]
  var i19296 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i19297.length; i += 2) {
  request.r(i19297[i + 0], i19297[i + 1], 1, i19296, '')
  }
  i19294.canvasRenderers = i19296
  i19294.enableSeparatorSlots = !!i19295[19]
  i19294.updateSeparatorPartLocation = !!i19295[20]
  i19294.updateSeparatorPartScale = !!i19295[21]
  i19294.disableMeshAssignmentOnOverride = !!i19295[22]
  i19294.m_SkeletonColor = new pc.Color(i19295[23], i19295[24], i19295[25], i19295[26])
  i19294.referenceSize = new pc.Vec2( i19295[27], i19295[28] )
  i19294.pivotOffset = new pc.Vec2( i19295[29], i19295[30] )
  i19294.referenceScale = i19295[31]
  i19294.layoutScale = i19295[32]
  i19294.rectTransformSize = new pc.Vec2( i19295[33], i19295[34] )
  i19294.editReferenceRect = !!i19295[35]
  var i19299 = i19295[36]
  var i19298 = []
  for(var i = 0; i < i19299.length; i += 1) {
    i19298.push( i19299[i + 0] );
  }
  i19294.separatorSlotNames = i19298
  var i19301 = i19295[37]
  var i19300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i19301.length; i += 2) {
  request.r(i19301[i + 0], i19301[i + 1], 1, i19300, '')
  }
  i19294.separatorParts = i19300
  i19294.physicsPositionInheritanceFactor = new pc.Vec2( i19295[38], i19295[39] )
  i19294.physicsRotationInheritanceFactor = i19295[40]
  request.r(i19295[41], i19295[42], 0, i19294, 'physicsMovementRelativeTo')
  i19294.meshGenerator = request.d('Spine.Unity.MeshGenerator', i19295[43], i19294.meshGenerator)
  i19294.updateTiming = i19295[44]
  i19294.unscaledTime = !!i19295[45]
  request.r(i19295[46], i19295[47], 0, i19294, 'm_Material')
  i19294.m_Maskable = !!i19295[48]
  i19294.m_Color = new pc.Color(i19295[49], i19295[50], i19295[51], i19295[52])
  i19294.m_RaycastTarget = !!i19295[53]
  i19294.m_RaycastPadding = new pc.Vec4( i19295[54], i19295[55], i19295[56], i19295[57] )
  return i19294
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i19308 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i19309 = data
  i19308.settings = request.d('Spine.Unity.MeshGenerator+Settings', i19309[0], i19308.settings)
  return i19308
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i19310 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i19311 = data
  i19310.useClipping = !!i19311[0]
  i19310.zSpacing = i19311[1]
  i19310.tintBlack = !!i19311[2]
  i19310.canvasGroupCompatible = !!i19311[3]
  i19310.pmaVertexColors = !!i19311[4]
  i19310.addNormals = !!i19311[5]
  i19310.calculateTangents = !!i19311[6]
  i19310.immutableTriangles = !!i19311[7]
  return i19310
}

Deserializers["AnimatedTileSpawner"] = function (request, data, root) {
  var i19312 = root || request.c( 'AnimatedTileSpawner' )
  var i19313 = data
  var i19315 = i19313[0]
  var i19314 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatedTile')))
  for(var i = 0; i < i19315.length; i += 2) {
  request.r(i19315[i + 0], i19315[i + 1], 1, i19314, '')
  }
  i19312.tiles = i19314
  return i19312
}

Deserializers["DynamiteEffect"] = function (request, data, root) {
  var i19318 = root || request.c( 'DynamiteEffect' )
  var i19319 = data
  i19318.initialScale = new pc.Vec3( i19319[0], i19319[1], i19319[2] )
  i19318.targetPos = new pc.Vec3( i19319[3], i19319[4], i19319[5] )
  i19318.duration = i19319[6]
  request.r(i19319[7], i19319[8], 0, i19318, 'model')
  request.r(i19319[9], i19319[10], 0, i19318, 'explosionEffectPrefab')
  return i19318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i19320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i19321 = data
  i19320.enabled = !!i19321[0]
  request.r(i19321[1], i19321[2], 0, i19320, 'sharedMaterial')
  var i19323 = i19321[3]
  var i19322 = []
  for(var i = 0; i < i19323.length; i += 2) {
  request.r(i19323[i + 0], i19323[i + 1], 2, i19322, '')
  }
  i19320.sharedMaterials = i19322
  i19320.receiveShadows = !!i19321[4]
  i19320.shadowCastingMode = i19321[5]
  i19320.sortingLayerID = i19321[6]
  i19320.sortingOrder = i19321[7]
  i19320.lightmapIndex = i19321[8]
  i19320.lightmapSceneIndex = i19321[9]
  i19320.lightmapScaleOffset = new pc.Vec4( i19321[10], i19321[11], i19321[12], i19321[13] )
  i19320.lightProbeUsage = i19321[14]
  i19320.reflectionProbeUsage = i19321[15]
  i19320.color = new pc.Color(i19321[16], i19321[17], i19321[18], i19321[19])
  request.r(i19321[20], i19321[21], 0, i19320, 'sprite')
  i19320.flipX = !!i19321[22]
  i19320.flipY = !!i19321[23]
  i19320.drawMode = i19321[24]
  i19320.size = new pc.Vec2( i19321[25], i19321[26] )
  i19320.tileMode = i19321[27]
  i19320.adaptiveModeThreshold = i19321[28]
  i19320.maskInteraction = i19321[29]
  i19320.spriteSortPoint = i19321[30]
  return i19320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i19324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i19325 = data
  request.r(i19325[0], i19325[1], 0, i19324, 'animatorController')
  request.r(i19325[2], i19325[3], 0, i19324, 'avatar')
  i19324.updateMode = i19325[4]
  i19324.hasTransformHierarchy = !!i19325[5]
  i19324.applyRootMotion = !!i19325[6]
  var i19327 = i19325[7]
  var i19326 = []
  for(var i = 0; i < i19327.length; i += 2) {
  request.r(i19327[i + 0], i19327[i + 1], 2, i19326, '')
  }
  i19324.humanBones = i19326
  i19324.enabled = !!i19325[8]
  return i19324
}

Deserializers["MergeHands"] = function (request, data, root) {
  var i19330 = root || request.c( 'MergeHands' )
  var i19331 = data
  request.r(i19331[0], i19331[1], 0, i19330, 'rectTransform')
  request.r(i19331[2], i19331[3], 0, i19330, 'target1')
  request.r(i19331[4], i19331[5], 0, i19330, 'target2')
  return i19330
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i19332 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i19333 = data
  request.r(i19333[0], i19333[1], 0, i19332, 'm_FirstSelected')
  i19332.m_sendNavigationEvents = !!i19333[2]
  i19332.m_DragThreshold = i19333[3]
  return i19332
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i19334 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i19335 = data
  i19334.m_HorizontalAxis = i19335[0]
  i19334.m_VerticalAxis = i19335[1]
  i19334.m_SubmitButton = i19335[2]
  i19334.m_CancelButton = i19335[3]
  i19334.m_InputActionsPerSecond = i19335[4]
  i19334.m_RepeatDelay = i19335[5]
  i19334.m_ForceModuleActive = !!i19335[6]
  i19334.m_SendPointerHoverToParent = !!i19335[7]
  return i19334
}

Deserializers["GameManager"] = function (request, data, root) {
  var i19336 = root || request.c( 'GameManager' )
  var i19337 = data
  i19336.IsSIP = !!i19337[0]
  i19336.gameType = i19337[1]
  i19336.toggleInactivityPanel = !!i19337[2]
  i19336.OnStartMIP1 = request.d('UnityEngine.Events.UnityEvent', i19337[3], i19336.OnStartMIP1)
  i19336.OnStartMIP2 = request.d('UnityEngine.Events.UnityEvent', i19337[4], i19336.OnStartMIP2)
  i19336.IsDoneCollecting = !!i19337[5]
  i19336.OnLevelComplete = request.d('UnityEngine.Events.UnityEvent', i19337[6], i19336.OnLevelComplete)
  request.r(i19337[7], i19337[8], 0, i19336, 'TutorialPanel')
  request.r(i19337[9], i19337[10], 0, i19336, 'GamePanel')
  request.r(i19337[11], i19337[12], 0, i19336, 'EndCard')
  request.r(i19337[13], i19337[14], 0, i19336, 'CTAPanel')
  request.r(i19337[15], i19337[16], 0, i19336, 'FailPanel')
  request.r(i19337[17], i19337[18], 0, i19336, 'EndCardInActivityPanel')
  i19336.iosLink = i19337[19]
  i19336.androidLink = i19337[20]
  i19336.hasTimer = !!i19337[21]
  i19336.currentTimer = i19337[22]
  i19336.maxTime = i19337[23]
  i19336.gameOver = !!i19337[24]
  request.r(i19337[25], i19337[26], 0, i19336, 'inactivityPanel')
  request.r(i19337[27], i19337[28], 0, i19336, 'inactivityPanelGame')
  i19336.inactivityTime = i19337[29]
  i19336.inactivityTimer = i19337[30]
  request.r(i19337[31], i19337[32], 0, i19336, 'timerText')
  var i19339 = i19337[33]
  var i19338 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i19339.length; i += 1) {
    i19338.add(request.d('GameManager+FurnitureItems', i19339[i + 0]));
  }
  i19336.items = i19338
  i19336.CurrentLevel = i19337[34]
  var i19341 = i19337[35]
  var i19340 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i19341.length; i += 1) {
    i19340.add(request.d('GameManager+FurnitureItems', i19341[i + 0]));
  }
  i19336.currentFurnitures = i19340
  var i19343 = i19337[36]
  var i19342 = new (System.Collections.Generic.List$1(Bridge.ns('BasicFade')))
  for(var i = 0; i < i19343.length; i += 2) {
  request.r(i19343[i + 0], i19343[i + 1], 1, i19342, '')
  }
  i19336.gameBoards = i19342
  var i19345 = i19337[37]
  var i19344 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationBase')))
  for(var i = 0; i < i19345.length; i += 2) {
  request.r(i19345[i + 0], i19345[i + 1], 1, i19344, '')
  }
  i19336.furnitureDecorations = i19344
  var i19347 = i19337[38]
  var i19346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i19347.length; i += 2) {
  request.r(i19347[i + 0], i19347[i + 1], 1, i19346, '')
  }
  i19336.mip1Objects = i19346
  var i19349 = i19337[39]
  var i19348 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i19349.length; i += 2) {
  request.r(i19349[i + 0], i19349[i + 1], 1, i19348, '')
  }
  i19336.mip2Objects = i19348
  var i19351 = i19337[40]
  var i19350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i19351.length; i += 2) {
  request.r(i19351[i + 0], i19351[i + 1], 1, i19350, '')
  }
  i19336.Feedback = i19350
  var i19353 = i19337[41]
  var i19352 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i19353.length; i += 1) {
    i19352.add(i19353[i + 0]);
  }
  i19336.audioKeys = i19352
  var i19355 = i19337[42]
  var i19354 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i19355.length; i += 1) {
    i19354.add(i19355[i + 0]);
  }
  i19336.cameraPanLocation = i19354
  request.r(i19337[43], i19337[44], 0, i19336, 'cameraPanObject')
  i19336.mip1ButtonPress = !!i19337[45]
  i19336.puzzlesToSolve = i19337[46]
  var i19357 = i19337[47]
  var i19356 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i19357.length; i += 2) {
  request.r(i19357[i + 0], i19357[i + 1], 1, i19356, '')
  }
  i19336.redirectButtons = i19356
  return i19336
}

Deserializers["GameManager+FurnitureItems"] = function (request, data, root) {
  var i19360 = root || request.c( 'GameManager+FurnitureItems' )
  var i19361 = data
  i19360.key = i19361[0]
  request.r(i19361[1], i19361[2], 0, i19360, 'value')
  return i19360
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i19368 = root || request.c( 'AudioManager' )
  var i19369 = data
  request.r(i19369[0], i19369[1], 0, i19368, 'library')
  i19368.sfxPoolSize = i19369[2]
  return i19368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i19370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i19371 = data
  i19370.ambientIntensity = i19371[0]
  i19370.reflectionIntensity = i19371[1]
  i19370.ambientMode = i19371[2]
  i19370.ambientLight = new pc.Color(i19371[3], i19371[4], i19371[5], i19371[6])
  i19370.ambientSkyColor = new pc.Color(i19371[7], i19371[8], i19371[9], i19371[10])
  i19370.ambientGroundColor = new pc.Color(i19371[11], i19371[12], i19371[13], i19371[14])
  i19370.ambientEquatorColor = new pc.Color(i19371[15], i19371[16], i19371[17], i19371[18])
  i19370.fogColor = new pc.Color(i19371[19], i19371[20], i19371[21], i19371[22])
  i19370.fogEndDistance = i19371[23]
  i19370.fogStartDistance = i19371[24]
  i19370.fogDensity = i19371[25]
  i19370.fog = !!i19371[26]
  request.r(i19371[27], i19371[28], 0, i19370, 'skybox')
  i19370.fogMode = i19371[29]
  var i19373 = i19371[30]
  var i19372 = []
  for(var i = 0; i < i19373.length; i += 1) {
    i19372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i19373[i + 0]) );
  }
  i19370.lightmaps = i19372
  i19370.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i19371[31], i19370.lightProbes)
  i19370.lightmapsMode = i19371[32]
  i19370.mixedBakeMode = i19371[33]
  i19370.environmentLightingMode = i19371[34]
  i19370.ambientProbe = new pc.SphericalHarmonicsL2(i19371[35])
  i19370.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i19371[36])
  i19370.useReferenceAmbientProbe = !!i19371[37]
  request.r(i19371[38], i19371[39], 0, i19370, 'customReflection')
  request.r(i19371[40], i19371[41], 0, i19370, 'defaultReflection')
  i19370.defaultReflectionMode = i19371[42]
  i19370.defaultReflectionResolution = i19371[43]
  i19370.sunLightObjectId = i19371[44]
  i19370.pixelLightCount = i19371[45]
  i19370.defaultReflectionHDR = !!i19371[46]
  i19370.hasLightDataAsset = !!i19371[47]
  i19370.hasManualGenerate = !!i19371[48]
  return i19370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i19376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i19377 = data
  request.r(i19377[0], i19377[1], 0, i19376, 'lightmapColor')
  request.r(i19377[2], i19377[3], 0, i19376, 'lightmapDirection')
  return i19376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i19378 = root || new UnityEngine.LightProbes()
  var i19379 = data
  return i19378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i19384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i19385 = data
  var i19387 = i19385[0]
  var i19386 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i19387.length; i += 1) {
    i19386.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i19387[i + 0]));
  }
  i19384.ShaderCompilationErrors = i19386
  i19384.name = i19385[1]
  i19384.guid = i19385[2]
  var i19389 = i19385[3]
  var i19388 = []
  for(var i = 0; i < i19389.length; i += 1) {
    i19388.push( i19389[i + 0] );
  }
  i19384.shaderDefinedKeywords = i19388
  var i19391 = i19385[4]
  var i19390 = []
  for(var i = 0; i < i19391.length; i += 1) {
    i19390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i19391[i + 0]) );
  }
  i19384.passes = i19390
  var i19393 = i19385[5]
  var i19392 = []
  for(var i = 0; i < i19393.length; i += 1) {
    i19392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i19393[i + 0]) );
  }
  i19384.usePasses = i19392
  var i19395 = i19385[6]
  var i19394 = []
  for(var i = 0; i < i19395.length; i += 1) {
    i19394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i19395[i + 0]) );
  }
  i19384.defaultParameterValues = i19394
  request.r(i19385[7], i19385[8], 0, i19384, 'unityFallbackShader')
  i19384.readDepth = !!i19385[9]
  i19384.isCreatedByShaderGraph = !!i19385[10]
  i19384.compiled = !!i19385[11]
  return i19384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i19398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i19399 = data
  i19398.shaderName = i19399[0]
  i19398.errorMessage = i19399[1]
  return i19398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i19402 = root || new pc.UnityShaderPass()
  var i19403 = data
  i19402.id = i19403[0]
  i19402.subShaderIndex = i19403[1]
  i19402.name = i19403[2]
  i19402.passType = i19403[3]
  i19402.grabPassTextureName = i19403[4]
  i19402.usePass = !!i19403[5]
  i19402.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19403[6], i19402.zTest)
  i19402.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19403[7], i19402.zWrite)
  i19402.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19403[8], i19402.culling)
  i19402.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i19403[9], i19402.blending)
  i19402.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i19403[10], i19402.alphaBlending)
  i19402.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19403[11], i19402.colorWriteMask)
  i19402.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19403[12], i19402.offsetUnits)
  i19402.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19403[13], i19402.offsetFactor)
  i19402.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19403[14], i19402.stencilRef)
  i19402.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19403[15], i19402.stencilReadMask)
  i19402.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19403[16], i19402.stencilWriteMask)
  i19402.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i19403[17], i19402.stencilOp)
  i19402.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i19403[18], i19402.stencilOpFront)
  i19402.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i19403[19], i19402.stencilOpBack)
  var i19405 = i19403[20]
  var i19404 = []
  for(var i = 0; i < i19405.length; i += 1) {
    i19404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i19405[i + 0]) );
  }
  i19402.tags = i19404
  var i19407 = i19403[21]
  var i19406 = []
  for(var i = 0; i < i19407.length; i += 1) {
    i19406.push( i19407[i + 0] );
  }
  i19402.passDefinedKeywords = i19406
  var i19409 = i19403[22]
  var i19408 = []
  for(var i = 0; i < i19409.length; i += 1) {
    i19408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i19409[i + 0]) );
  }
  i19402.passDefinedKeywordGroups = i19408
  var i19411 = i19403[23]
  var i19410 = []
  for(var i = 0; i < i19411.length; i += 1) {
    i19410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i19411[i + 0]) );
  }
  i19402.variants = i19410
  var i19413 = i19403[24]
  var i19412 = []
  for(var i = 0; i < i19413.length; i += 1) {
    i19412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i19413[i + 0]) );
  }
  i19402.excludedVariants = i19412
  i19402.hasDepthReader = !!i19403[25]
  return i19402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i19414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i19415 = data
  i19414.val = i19415[0]
  i19414.name = i19415[1]
  return i19414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i19416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i19417 = data
  i19416.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19417[0], i19416.src)
  i19416.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19417[1], i19416.dst)
  i19416.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19417[2], i19416.op)
  return i19416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i19418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i19419 = data
  i19418.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19419[0], i19418.pass)
  i19418.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19419[1], i19418.fail)
  i19418.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19419[2], i19418.zFail)
  i19418.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i19419[3], i19418.comp)
  return i19418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i19422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i19423 = data
  i19422.name = i19423[0]
  i19422.value = i19423[1]
  return i19422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i19426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i19427 = data
  var i19429 = i19427[0]
  var i19428 = []
  for(var i = 0; i < i19429.length; i += 1) {
    i19428.push( i19429[i + 0] );
  }
  i19426.keywords = i19428
  i19426.hasDiscard = !!i19427[1]
  return i19426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i19432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i19433 = data
  i19432.passId = i19433[0]
  i19432.subShaderIndex = i19433[1]
  var i19435 = i19433[2]
  var i19434 = []
  for(var i = 0; i < i19435.length; i += 1) {
    i19434.push( i19435[i + 0] );
  }
  i19432.keywords = i19434
  i19432.vertexProgram = i19433[3]
  i19432.fragmentProgram = i19433[4]
  i19432.exportedForWebGl2 = !!i19433[5]
  i19432.readDepth = !!i19433[6]
  return i19432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i19438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i19439 = data
  request.r(i19439[0], i19439[1], 0, i19438, 'shader')
  i19438.pass = i19439[2]
  return i19438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i19442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i19443 = data
  i19442.name = i19443[0]
  i19442.type = i19443[1]
  i19442.value = new pc.Vec4( i19443[2], i19443[3], i19443[4], i19443[5] )
  i19442.textureValue = i19443[6]
  i19442.shaderPropertyFlag = i19443[7]
  return i19442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i19444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i19445 = data
  i19444.name = i19445[0]
  request.r(i19445[1], i19445[2], 0, i19444, 'texture')
  i19444.aabb = i19445[3]
  i19444.vertices = i19445[4]
  i19444.triangles = i19445[5]
  i19444.textureRect = UnityEngine.Rect.MinMaxRect(i19445[6], i19445[7], i19445[8], i19445[9])
  i19444.packedRect = UnityEngine.Rect.MinMaxRect(i19445[10], i19445[11], i19445[12], i19445[13])
  i19444.border = new pc.Vec4( i19445[14], i19445[15], i19445[16], i19445[17] )
  i19444.transparency = i19445[18]
  i19444.bounds = i19445[19]
  i19444.pixelsPerUnit = i19445[20]
  i19444.textureWidth = i19445[21]
  i19444.textureHeight = i19445[22]
  i19444.nativeSize = new pc.Vec2( i19445[23], i19445[24] )
  i19444.pivot = new pc.Vec2( i19445[25], i19445[26] )
  i19444.textureRectOffset = new pc.Vec2( i19445[27], i19445[28] )
  return i19444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i19446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i19447 = data
  i19446.name = i19447[0]
  return i19446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i19448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i19449 = data
  i19448.name = i19449[0]
  i19448.wrapMode = i19449[1]
  i19448.isLooping = !!i19449[2]
  i19448.length = i19449[3]
  var i19451 = i19449[4]
  var i19450 = []
  for(var i = 0; i < i19451.length; i += 1) {
    i19450.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i19451[i + 0]) );
  }
  i19448.curves = i19450
  var i19453 = i19449[5]
  var i19452 = []
  for(var i = 0; i < i19453.length; i += 1) {
    i19452.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i19453[i + 0]) );
  }
  i19448.events = i19452
  i19448.halfPrecision = !!i19449[6]
  i19448._frameRate = i19449[7]
  i19448.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i19449[8], i19448.localBounds)
  i19448.hasMuscleCurves = !!i19449[9]
  var i19455 = i19449[10]
  var i19454 = []
  for(var i = 0; i < i19455.length; i += 1) {
    i19454.push( i19455[i + 0] );
  }
  i19448.clipMuscleConstant = i19454
  i19448.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i19449[11], i19448.clipBindingConstant)
  return i19448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i19458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i19459 = data
  i19458.path = i19459[0]
  i19458.hash = i19459[1]
  i19458.componentType = i19459[2]
  i19458.property = i19459[3]
  i19458.keys = i19459[4]
  var i19461 = i19459[5]
  var i19460 = []
  for(var i = 0; i < i19461.length; i += 1) {
    i19460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i19461[i + 0]) );
  }
  i19458.objectReferenceKeys = i19460
  return i19458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i19464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i19465 = data
  i19464.time = i19465[0]
  request.r(i19465[1], i19465[2], 0, i19464, 'value')
  return i19464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i19468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i19469 = data
  i19468.functionName = i19469[0]
  i19468.floatParameter = i19469[1]
  i19468.intParameter = i19469[2]
  i19468.stringParameter = i19469[3]
  request.r(i19469[4], i19469[5], 0, i19468, 'objectReferenceParameter')
  i19468.time = i19469[6]
  return i19468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i19470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i19471 = data
  i19470.center = new pc.Vec3( i19471[0], i19471[1], i19471[2] )
  i19470.extends = new pc.Vec3( i19471[3], i19471[4], i19471[5] )
  return i19470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i19474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i19475 = data
  var i19477 = i19475[0]
  var i19476 = []
  for(var i = 0; i < i19477.length; i += 1) {
    i19476.push( i19477[i + 0] );
  }
  i19474.genericBindings = i19476
  var i19479 = i19475[1]
  var i19478 = []
  for(var i = 0; i < i19479.length; i += 1) {
    i19478.push( i19479[i + 0] );
  }
  i19474.pptrCurveMapping = i19478
  return i19474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i19480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i19481 = data
  i19480.name = i19481[0]
  i19480.ascent = i19481[1]
  i19480.originalLineHeight = i19481[2]
  i19480.fontSize = i19481[3]
  var i19483 = i19481[4]
  var i19482 = []
  for(var i = 0; i < i19483.length; i += 1) {
    i19482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i19483[i + 0]) );
  }
  i19480.characterInfo = i19482
  request.r(i19481[5], i19481[6], 0, i19480, 'texture')
  i19480.originalFontSize = i19481[7]
  return i19480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i19486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i19487 = data
  i19486.index = i19487[0]
  i19486.advance = i19487[1]
  i19486.bearing = i19487[2]
  i19486.glyphWidth = i19487[3]
  i19486.glyphHeight = i19487[4]
  i19486.minX = i19487[5]
  i19486.maxX = i19487[6]
  i19486.minY = i19487[7]
  i19486.maxY = i19487[8]
  i19486.uvBottomLeftX = i19487[9]
  i19486.uvBottomLeftY = i19487[10]
  i19486.uvBottomRightX = i19487[11]
  i19486.uvBottomRightY = i19487[12]
  i19486.uvTopLeftX = i19487[13]
  i19486.uvTopLeftY = i19487[14]
  i19486.uvTopRightX = i19487[15]
  i19486.uvTopRightY = i19487[16]
  return i19486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i19488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i19489 = data
  i19488.name = i19489[0]
  var i19491 = i19489[1]
  var i19490 = []
  for(var i = 0; i < i19491.length; i += 1) {
    i19490.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i19491[i + 0]) );
  }
  i19488.layers = i19490
  var i19493 = i19489[2]
  var i19492 = []
  for(var i = 0; i < i19493.length; i += 1) {
    i19492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i19493[i + 0]) );
  }
  i19488.parameters = i19492
  i19488.animationClips = i19489[3]
  i19488.avatarUnsupported = i19489[4]
  return i19488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i19496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i19497 = data
  i19496.name = i19497[0]
  i19496.defaultWeight = i19497[1]
  i19496.blendingMode = i19497[2]
  i19496.avatarMask = i19497[3]
  i19496.syncedLayerIndex = i19497[4]
  i19496.syncedLayerAffectsTiming = !!i19497[5]
  i19496.syncedLayers = i19497[6]
  i19496.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i19497[7], i19496.stateMachine)
  return i19496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i19498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i19499 = data
  i19498.id = i19499[0]
  i19498.name = i19499[1]
  i19498.path = i19499[2]
  var i19501 = i19499[3]
  var i19500 = []
  for(var i = 0; i < i19501.length; i += 1) {
    i19500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i19501[i + 0]) );
  }
  i19498.states = i19500
  var i19503 = i19499[4]
  var i19502 = []
  for(var i = 0; i < i19503.length; i += 1) {
    i19502.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i19503[i + 0]) );
  }
  i19498.machines = i19502
  var i19505 = i19499[5]
  var i19504 = []
  for(var i = 0; i < i19505.length; i += 1) {
    i19504.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i19505[i + 0]) );
  }
  i19498.entryStateTransitions = i19504
  var i19507 = i19499[6]
  var i19506 = []
  for(var i = 0; i < i19507.length; i += 1) {
    i19506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i19507[i + 0]) );
  }
  i19498.exitStateTransitions = i19506
  var i19509 = i19499[7]
  var i19508 = []
  for(var i = 0; i < i19509.length; i += 1) {
    i19508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i19509[i + 0]) );
  }
  i19498.anyStateTransitions = i19508
  i19498.defaultStateId = i19499[8]
  return i19498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i19512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i19513 = data
  i19512.id = i19513[0]
  i19512.name = i19513[1]
  i19512.cycleOffset = i19513[2]
  i19512.cycleOffsetParameter = i19513[3]
  i19512.cycleOffsetParameterActive = !!i19513[4]
  i19512.mirror = !!i19513[5]
  i19512.mirrorParameter = i19513[6]
  i19512.mirrorParameterActive = !!i19513[7]
  i19512.motionId = i19513[8]
  i19512.nameHash = i19513[9]
  i19512.fullPathHash = i19513[10]
  i19512.speed = i19513[11]
  i19512.speedParameter = i19513[12]
  i19512.speedParameterActive = !!i19513[13]
  i19512.tag = i19513[14]
  i19512.tagHash = i19513[15]
  i19512.writeDefaultValues = !!i19513[16]
  var i19515 = i19513[17]
  var i19514 = []
  for(var i = 0; i < i19515.length; i += 2) {
  request.r(i19515[i + 0], i19515[i + 1], 2, i19514, '')
  }
  i19512.behaviours = i19514
  var i19517 = i19513[18]
  var i19516 = []
  for(var i = 0; i < i19517.length; i += 1) {
    i19516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i19517[i + 0]) );
  }
  i19512.transitions = i19516
  return i19512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i19522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i19523 = data
  i19522.fullPath = i19523[0]
  i19522.canTransitionToSelf = !!i19523[1]
  i19522.duration = i19523[2]
  i19522.exitTime = i19523[3]
  i19522.hasExitTime = !!i19523[4]
  i19522.hasFixedDuration = !!i19523[5]
  i19522.interruptionSource = i19523[6]
  i19522.offset = i19523[7]
  i19522.orderedInterruption = !!i19523[8]
  i19522.destinationStateId = i19523[9]
  i19522.isExit = !!i19523[10]
  i19522.mute = !!i19523[11]
  i19522.solo = !!i19523[12]
  var i19525 = i19523[13]
  var i19524 = []
  for(var i = 0; i < i19525.length; i += 1) {
    i19524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i19525[i + 0]) );
  }
  i19522.conditions = i19524
  return i19522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i19530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i19531 = data
  i19530.destinationStateId = i19531[0]
  i19530.isExit = !!i19531[1]
  i19530.mute = !!i19531[2]
  i19530.solo = !!i19531[3]
  var i19533 = i19531[4]
  var i19532 = []
  for(var i = 0; i < i19533.length; i += 1) {
    i19532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i19533[i + 0]) );
  }
  i19530.conditions = i19532
  return i19530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i19536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i19537 = data
  i19536.defaultBool = !!i19537[0]
  i19536.defaultFloat = i19537[1]
  i19536.defaultInt = i19537[2]
  i19536.name = i19537[3]
  i19536.nameHash = i19537[4]
  i19536.type = i19537[5]
  return i19536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i19538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i19539 = data
  i19538.name = i19539[0]
  i19538.bytes64 = i19539[1]
  i19538.data = i19539[2]
  return i19538
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i19540 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i19541 = data
  i19540.hashCode = i19541[0]
  request.r(i19541[1], i19541[2], 0, i19540, 'material')
  i19540.materialHashCode = i19541[3]
  request.r(i19541[4], i19541[5], 0, i19540, 'atlas')
  i19540.normalStyle = i19541[6]
  i19540.normalSpacingOffset = i19541[7]
  i19540.boldStyle = i19541[8]
  i19540.boldSpacing = i19541[9]
  i19540.italicStyle = i19541[10]
  i19540.tabSize = i19541[11]
  i19540.m_Version = i19541[12]
  i19540.m_SourceFontFileGUID = i19541[13]
  request.r(i19541[14], i19541[15], 0, i19540, 'm_SourceFontFile_EditorRef')
  request.r(i19541[16], i19541[17], 0, i19540, 'm_SourceFontFile')
  i19540.m_AtlasPopulationMode = i19541[18]
  i19540.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i19541[19], i19540.m_FaceInfo)
  var i19543 = i19541[20]
  var i19542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i19543.length; i += 1) {
    i19542.add(request.d('UnityEngine.TextCore.Glyph', i19543[i + 0]));
  }
  i19540.m_GlyphTable = i19542
  var i19545 = i19541[21]
  var i19544 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i19545.length; i += 1) {
    i19544.add(request.d('TMPro.TMP_Character', i19545[i + 0]));
  }
  i19540.m_CharacterTable = i19544
  var i19547 = i19541[22]
  var i19546 = []
  for(var i = 0; i < i19547.length; i += 2) {
  request.r(i19547[i + 0], i19547[i + 1], 2, i19546, '')
  }
  i19540.m_AtlasTextures = i19546
  i19540.m_AtlasTextureIndex = i19541[23]
  i19540.m_IsMultiAtlasTexturesEnabled = !!i19541[24]
  i19540.m_ClearDynamicDataOnBuild = !!i19541[25]
  var i19549 = i19541[26]
  var i19548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i19549.length; i += 1) {
    i19548.add(request.d('UnityEngine.TextCore.GlyphRect', i19549[i + 0]));
  }
  i19540.m_UsedGlyphRects = i19548
  var i19551 = i19541[27]
  var i19550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i19551.length; i += 1) {
    i19550.add(request.d('UnityEngine.TextCore.GlyphRect', i19551[i + 0]));
  }
  i19540.m_FreeGlyphRects = i19550
  i19540.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i19541[28], i19540.m_fontInfo)
  i19540.m_AtlasWidth = i19541[29]
  i19540.m_AtlasHeight = i19541[30]
  i19540.m_AtlasPadding = i19541[31]
  i19540.m_AtlasRenderMode = i19541[32]
  var i19553 = i19541[33]
  var i19552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i19553.length; i += 1) {
    i19552.add(request.d('TMPro.TMP_Glyph', i19553[i + 0]));
  }
  i19540.m_glyphInfoList = i19552
  i19540.m_KerningTable = request.d('TMPro.KerningTable', i19541[34], i19540.m_KerningTable)
  i19540.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i19541[35], i19540.m_FontFeatureTable)
  var i19555 = i19541[36]
  var i19554 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i19555.length; i += 2) {
  request.r(i19555[i + 0], i19555[i + 1], 1, i19554, '')
  }
  i19540.fallbackFontAssets = i19554
  var i19557 = i19541[37]
  var i19556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i19557.length; i += 2) {
  request.r(i19557[i + 0], i19557[i + 1], 1, i19556, '')
  }
  i19540.m_FallbackFontAssetTable = i19556
  i19540.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i19541[38], i19540.m_CreationSettings)
  var i19559 = i19541[39]
  var i19558 = []
  for(var i = 0; i < i19559.length; i += 1) {
    i19558.push( request.d('TMPro.TMP_FontWeightPair', i19559[i + 0]) );
  }
  i19540.m_FontWeightTable = i19558
  var i19561 = i19541[40]
  var i19560 = []
  for(var i = 0; i < i19561.length; i += 1) {
    i19560.push( request.d('TMPro.TMP_FontWeightPair', i19561[i + 0]) );
  }
  i19540.fontWeights = i19560
  return i19540
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i19562 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i19563 = data
  i19562.m_FaceIndex = i19563[0]
  i19562.m_FamilyName = i19563[1]
  i19562.m_StyleName = i19563[2]
  i19562.m_PointSize = i19563[3]
  i19562.m_Scale = i19563[4]
  i19562.m_UnitsPerEM = i19563[5]
  i19562.m_LineHeight = i19563[6]
  i19562.m_AscentLine = i19563[7]
  i19562.m_CapLine = i19563[8]
  i19562.m_MeanLine = i19563[9]
  i19562.m_Baseline = i19563[10]
  i19562.m_DescentLine = i19563[11]
  i19562.m_SuperscriptOffset = i19563[12]
  i19562.m_SuperscriptSize = i19563[13]
  i19562.m_SubscriptOffset = i19563[14]
  i19562.m_SubscriptSize = i19563[15]
  i19562.m_UnderlineOffset = i19563[16]
  i19562.m_UnderlineThickness = i19563[17]
  i19562.m_StrikethroughOffset = i19563[18]
  i19562.m_StrikethroughThickness = i19563[19]
  i19562.m_TabWidth = i19563[20]
  return i19562
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i19566 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i19567 = data
  i19566.m_Index = i19567[0]
  i19566.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i19567[1], i19566.m_Metrics)
  i19566.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i19567[2], i19566.m_GlyphRect)
  i19566.m_Scale = i19567[3]
  i19566.m_AtlasIndex = i19567[4]
  i19566.m_ClassDefinitionType = i19567[5]
  return i19566
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i19568 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i19569 = data
  i19568.m_Width = i19569[0]
  i19568.m_Height = i19569[1]
  i19568.m_HorizontalBearingX = i19569[2]
  i19568.m_HorizontalBearingY = i19569[3]
  i19568.m_HorizontalAdvance = i19569[4]
  return i19568
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i19570 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i19571 = data
  i19570.m_X = i19571[0]
  i19570.m_Y = i19571[1]
  i19570.m_Width = i19571[2]
  i19570.m_Height = i19571[3]
  return i19570
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i19574 = root || request.c( 'TMPro.TMP_Character' )
  var i19575 = data
  i19574.m_ElementType = i19575[0]
  i19574.m_Unicode = i19575[1]
  i19574.m_GlyphIndex = i19575[2]
  i19574.m_Scale = i19575[3]
  return i19574
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i19580 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i19581 = data
  i19580.Name = i19581[0]
  i19580.PointSize = i19581[1]
  i19580.Scale = i19581[2]
  i19580.CharacterCount = i19581[3]
  i19580.LineHeight = i19581[4]
  i19580.Baseline = i19581[5]
  i19580.Ascender = i19581[6]
  i19580.CapHeight = i19581[7]
  i19580.Descender = i19581[8]
  i19580.CenterLine = i19581[9]
  i19580.SuperscriptOffset = i19581[10]
  i19580.SubscriptOffset = i19581[11]
  i19580.SubSize = i19581[12]
  i19580.Underline = i19581[13]
  i19580.UnderlineThickness = i19581[14]
  i19580.strikethrough = i19581[15]
  i19580.strikethroughThickness = i19581[16]
  i19580.TabWidth = i19581[17]
  i19580.Padding = i19581[18]
  i19580.AtlasWidth = i19581[19]
  i19580.AtlasHeight = i19581[20]
  return i19580
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i19584 = root || request.c( 'TMPro.TMP_Glyph' )
  var i19585 = data
  i19584.id = i19585[0]
  i19584.x = i19585[1]
  i19584.y = i19585[2]
  i19584.width = i19585[3]
  i19584.height = i19585[4]
  i19584.xOffset = i19585[5]
  i19584.yOffset = i19585[6]
  i19584.xAdvance = i19585[7]
  i19584.scale = i19585[8]
  return i19584
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i19586 = root || request.c( 'TMPro.KerningTable' )
  var i19587 = data
  var i19589 = i19587[0]
  var i19588 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i19589.length; i += 1) {
    i19588.add(request.d('TMPro.KerningPair', i19589[i + 0]));
  }
  i19586.kerningPairs = i19588
  return i19586
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i19592 = root || request.c( 'TMPro.KerningPair' )
  var i19593 = data
  i19592.xOffset = i19593[0]
  i19592.m_FirstGlyph = i19593[1]
  i19592.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i19593[2], i19592.m_FirstGlyphAdjustments)
  i19592.m_SecondGlyph = i19593[3]
  i19592.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i19593[4], i19592.m_SecondGlyphAdjustments)
  i19592.m_IgnoreSpacingAdjustments = !!i19593[5]
  return i19592
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i19594 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i19595 = data
  var i19597 = i19595[0]
  var i19596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i19597.length; i += 1) {
    i19596.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i19597[i + 0]));
  }
  i19594.m_GlyphPairAdjustmentRecords = i19596
  return i19594
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i19600 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i19601 = data
  i19600.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i19601[0], i19600.m_FirstAdjustmentRecord)
  i19600.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i19601[1], i19600.m_SecondAdjustmentRecord)
  i19600.m_FeatureLookupFlags = i19601[2]
  return i19600
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i19604 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i19605 = data
  i19604.sourceFontFileName = i19605[0]
  i19604.sourceFontFileGUID = i19605[1]
  i19604.pointSizeSamplingMode = i19605[2]
  i19604.pointSize = i19605[3]
  i19604.padding = i19605[4]
  i19604.packingMode = i19605[5]
  i19604.atlasWidth = i19605[6]
  i19604.atlasHeight = i19605[7]
  i19604.characterSetSelectionMode = i19605[8]
  i19604.characterSequence = i19605[9]
  i19604.referencedFontAssetGUID = i19605[10]
  i19604.referencedTextAssetGUID = i19605[11]
  i19604.fontStyle = i19605[12]
  i19604.fontStyleModifier = i19605[13]
  i19604.renderMode = i19605[14]
  i19604.includeFontFeatures = !!i19605[15]
  return i19604
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i19608 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i19609 = data
  request.r(i19609[0], i19609[1], 0, i19608, 'regularTypeface')
  request.r(i19609[2], i19609[3], 0, i19608, 'italicTypeface')
  return i19608
}

Deserializers["ItemData"] = function (request, data, root) {
  var i19610 = root || request.c( 'ItemData' )
  var i19611 = data
  i19610.itemName = i19611[0]
  request.r(i19611[1], i19611[2], 0, i19610, 'itemIcon')
  i19610.ItemCount = i19611[3]
  request.r(i19611[4], i19611[5], 0, i19610, 'collectItemSprite')
  i19610.color = i19611[6]
  request.r(i19611[7], i19611[8], 0, i19610, 'DecorationSprite')
  return i19610
}

Deserializers["TileData"] = function (request, data, root) {
  var i19612 = root || request.c( 'TileData' )
  var i19613 = data
  i19612.tileName = i19613[0]
  request.r(i19613[1], i19613[2], 0, i19612, 'tileSprite')
  i19612.isPowerup = !!i19613[3]
  i19612.isBreakable = !!i19613[4]
  i19612.isSwappable = !!i19613[5]
  i19612.isSpecialBreakable = !!i19613[6]
  return i19612
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i19614 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i19615 = data
  var i19617 = i19615[0]
  var i19616 = []
  for(var i = 0; i < i19617.length; i += 2) {
  request.r(i19617[i + 0], i19617[i + 1], 2, i19616, '')
  }
  i19614.atlasAssets = i19616
  i19614.scale = i19615[1]
  request.r(i19615[2], i19615[3], 0, i19614, 'skeletonJSON')
  i19614.isUpgradingBlendModeMaterials = !!i19615[4]
  i19614.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i19615[5], i19614.blendModeMaterials)
  var i19619 = i19615[6]
  var i19618 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i19619.length; i += 2) {
  request.r(i19619[i + 0], i19619[i + 1], 1, i19618, '')
  }
  i19614.skeletonDataModifiers = i19618
  var i19621 = i19615[7]
  var i19620 = []
  for(var i = 0; i < i19621.length; i += 1) {
    i19620.push( i19621[i + 0] );
  }
  i19614.fromAnimation = i19620
  var i19623 = i19615[8]
  var i19622 = []
  for(var i = 0; i < i19623.length; i += 1) {
    i19622.push( i19623[i + 0] );
  }
  i19614.toAnimation = i19622
  i19614.duration = i19615[9]
  i19614.defaultMix = i19615[10]
  request.r(i19615[11], i19615[12], 0, i19614, 'controller')
  return i19614
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i19626 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i19627 = data
  i19626.applyAdditiveMaterial = !!i19627[0]
  var i19629 = i19627[1]
  var i19628 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i19629.length; i += 1) {
    i19628.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i19629[i + 0]));
  }
  i19626.additiveMaterials = i19628
  var i19631 = i19627[2]
  var i19630 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i19631.length; i += 1) {
    i19630.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i19631[i + 0]));
  }
  i19626.multiplyMaterials = i19630
  var i19633 = i19627[3]
  var i19632 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i19633.length; i += 1) {
    i19632.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i19633[i + 0]));
  }
  i19626.screenMaterials = i19632
  i19626.requiresBlendModeMaterials = !!i19627[4]
  return i19626
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i19636 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i19637 = data
  i19636.pageName = i19637[0]
  request.r(i19637[1], i19637[2], 0, i19636, 'material')
  return i19636
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i19640 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i19641 = data
  request.r(i19641[0], i19641[1], 0, i19640, 'atlasFile')
  var i19643 = i19641[2]
  var i19642 = []
  for(var i = 0; i < i19643.length; i += 2) {
  request.r(i19643[i + 0], i19643[i + 1], 2, i19642, '')
  }
  i19640.materials = i19642
  i19640.textureLoadingMode = i19641[3]
  request.r(i19641[4], i19641[5], 0, i19640, 'onDemandTextureLoader')
  return i19640
}

Deserializers["DynamitePowerup"] = function (request, data, root) {
  var i19644 = root || request.c( 'DynamitePowerup' )
  var i19645 = data
  i19644.explosionRadius = i19645[0]
  i19644.tileName = i19645[1]
  request.r(i19645[2], i19645[3], 0, i19644, 'tileSprite')
  i19644.isPowerup = !!i19645[4]
  i19644.isBreakable = !!i19645[5]
  i19644.isSwappable = !!i19645[6]
  i19644.isSpecialBreakable = !!i19645[7]
  return i19644
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i19646 = root || request.c( 'AudioLibrary' )
  var i19647 = data
  var i19649 = i19647[0]
  var i19648 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i19649.length; i += 1) {
    i19648.add(request.d('AudioLibrary+ClipEntry', i19649[i + 0]));
  }
  i19646.clips = i19648
  return i19646
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i19652 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i19653 = data
  i19652.key = i19653[0]
  i19652.channel = i19653[1]
  request.r(i19653[2], i19653[3], 0, i19652, 'clip')
  i19652.volume = i19653[4]
  i19652.loop = !!i19653[5]
  return i19652
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i19654 = root || request.c( 'TMPro.TMP_Settings' )
  var i19655 = data
  i19654.m_enableWordWrapping = !!i19655[0]
  i19654.m_enableKerning = !!i19655[1]
  i19654.m_enableExtraPadding = !!i19655[2]
  i19654.m_enableTintAllSprites = !!i19655[3]
  i19654.m_enableParseEscapeCharacters = !!i19655[4]
  i19654.m_EnableRaycastTarget = !!i19655[5]
  i19654.m_GetFontFeaturesAtRuntime = !!i19655[6]
  i19654.m_missingGlyphCharacter = i19655[7]
  i19654.m_warningsDisabled = !!i19655[8]
  request.r(i19655[9], i19655[10], 0, i19654, 'm_defaultFontAsset')
  i19654.m_defaultFontAssetPath = i19655[11]
  i19654.m_defaultFontSize = i19655[12]
  i19654.m_defaultAutoSizeMinRatio = i19655[13]
  i19654.m_defaultAutoSizeMaxRatio = i19655[14]
  i19654.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i19655[15], i19655[16] )
  i19654.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i19655[17], i19655[18] )
  i19654.m_autoSizeTextContainer = !!i19655[19]
  i19654.m_IsTextObjectScaleStatic = !!i19655[20]
  var i19657 = i19655[21]
  var i19656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i19657.length; i += 2) {
  request.r(i19657[i + 0], i19657[i + 1], 1, i19656, '')
  }
  i19654.m_fallbackFontAssets = i19656
  i19654.m_matchMaterialPreset = !!i19655[22]
  request.r(i19655[23], i19655[24], 0, i19654, 'm_defaultSpriteAsset')
  i19654.m_defaultSpriteAssetPath = i19655[25]
  i19654.m_enableEmojiSupport = !!i19655[26]
  i19654.m_MissingCharacterSpriteUnicode = i19655[27]
  i19654.m_defaultColorGradientPresetsPath = i19655[28]
  request.r(i19655[29], i19655[30], 0, i19654, 'm_defaultStyleSheet')
  i19654.m_StyleSheetsResourcePath = i19655[31]
  request.r(i19655[32], i19655[33], 0, i19654, 'm_leadingCharacters')
  request.r(i19655[34], i19655[35], 0, i19654, 'm_followingCharacters')
  i19654.m_UseModernHangulLineBreakingRules = !!i19655[36]
  return i19654
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i19658 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i19659 = data
  i19658.hashCode = i19659[0]
  request.r(i19659[1], i19659[2], 0, i19658, 'material')
  i19658.materialHashCode = i19659[3]
  request.r(i19659[4], i19659[5], 0, i19658, 'spriteSheet')
  var i19661 = i19659[6]
  var i19660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i19661.length; i += 1) {
    i19660.add(request.d('TMPro.TMP_Sprite', i19661[i + 0]));
  }
  i19658.spriteInfoList = i19660
  var i19663 = i19659[7]
  var i19662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i19663.length; i += 2) {
  request.r(i19663[i + 0], i19663[i + 1], 1, i19662, '')
  }
  i19658.fallbackSpriteAssets = i19662
  i19658.m_Version = i19659[8]
  i19658.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i19659[9], i19658.m_FaceInfo)
  var i19665 = i19659[10]
  var i19664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i19665.length; i += 1) {
    i19664.add(request.d('TMPro.TMP_SpriteCharacter', i19665[i + 0]));
  }
  i19658.m_SpriteCharacterTable = i19664
  var i19667 = i19659[11]
  var i19666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i19667.length; i += 1) {
    i19666.add(request.d('TMPro.TMP_SpriteGlyph', i19667[i + 0]));
  }
  i19658.m_SpriteGlyphTable = i19666
  return i19658
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i19670 = root || request.c( 'TMPro.TMP_Sprite' )
  var i19671 = data
  i19670.name = i19671[0]
  i19670.hashCode = i19671[1]
  i19670.unicode = i19671[2]
  i19670.pivot = new pc.Vec2( i19671[3], i19671[4] )
  request.r(i19671[5], i19671[6], 0, i19670, 'sprite')
  i19670.id = i19671[7]
  i19670.x = i19671[8]
  i19670.y = i19671[9]
  i19670.width = i19671[10]
  i19670.height = i19671[11]
  i19670.xOffset = i19671[12]
  i19670.yOffset = i19671[13]
  i19670.xAdvance = i19671[14]
  i19670.scale = i19671[15]
  return i19670
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i19676 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i19677 = data
  i19676.m_Name = i19677[0]
  i19676.m_HashCode = i19677[1]
  i19676.m_ElementType = i19677[2]
  i19676.m_Unicode = i19677[3]
  i19676.m_GlyphIndex = i19677[4]
  i19676.m_Scale = i19677[5]
  return i19676
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i19680 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i19681 = data
  request.r(i19681[0], i19681[1], 0, i19680, 'sprite')
  i19680.m_Index = i19681[2]
  i19680.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i19681[3], i19680.m_Metrics)
  i19680.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i19681[4], i19680.m_GlyphRect)
  i19680.m_Scale = i19681[5]
  i19680.m_AtlasIndex = i19681[6]
  i19680.m_ClassDefinitionType = i19681[7]
  return i19680
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i19682 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i19683 = data
  var i19685 = i19683[0]
  var i19684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i19685.length; i += 1) {
    i19684.add(request.d('TMPro.TMP_Style', i19685[i + 0]));
  }
  i19682.m_StyleList = i19684
  return i19682
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i19688 = root || request.c( 'TMPro.TMP_Style' )
  var i19689 = data
  i19688.m_Name = i19689[0]
  i19688.m_HashCode = i19689[1]
  i19688.m_OpeningDefinition = i19689[2]
  i19688.m_ClosingDefinition = i19689[3]
  i19688.m_OpeningTagArray = i19689[4]
  i19688.m_ClosingTagArray = i19689[5]
  i19688.m_OpeningTagUnicodeArray = i19689[6]
  i19688.m_ClosingTagUnicodeArray = i19689[7]
  return i19688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i19690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i19691 = data
  var i19693 = i19691[0]
  var i19692 = []
  for(var i = 0; i < i19693.length; i += 1) {
    i19692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i19693[i + 0]) );
  }
  i19690.files = i19692
  i19690.componentToPrefabIds = i19691[1]
  return i19690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i19696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i19697 = data
  i19696.path = i19697[0]
  request.r(i19697[1], i19697[2], 0, i19696, 'unityObject')
  return i19696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i19698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i19699 = data
  var i19701 = i19699[0]
  var i19700 = []
  for(var i = 0; i < i19701.length; i += 1) {
    i19700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i19701[i + 0]) );
  }
  i19698.scriptsExecutionOrder = i19700
  var i19703 = i19699[1]
  var i19702 = []
  for(var i = 0; i < i19703.length; i += 1) {
    i19702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i19703[i + 0]) );
  }
  i19698.sortingLayers = i19702
  var i19705 = i19699[2]
  var i19704 = []
  for(var i = 0; i < i19705.length; i += 1) {
    i19704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i19705[i + 0]) );
  }
  i19698.cullingLayers = i19704
  i19698.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i19699[3], i19698.timeSettings)
  i19698.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i19699[4], i19698.physicsSettings)
  i19698.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i19699[5], i19698.physics2DSettings)
  i19698.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i19699[6], i19698.qualitySettings)
  i19698.enableRealtimeShadows = !!i19699[7]
  i19698.enableAutoInstancing = !!i19699[8]
  i19698.enableDynamicBatching = !!i19699[9]
  i19698.lightmapEncodingQuality = i19699[10]
  i19698.desiredColorSpace = i19699[11]
  var i19707 = i19699[12]
  var i19706 = []
  for(var i = 0; i < i19707.length; i += 1) {
    i19706.push( i19707[i + 0] );
  }
  i19698.allTags = i19706
  return i19698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i19710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i19711 = data
  i19710.name = i19711[0]
  i19710.value = i19711[1]
  return i19710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i19714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i19715 = data
  i19714.id = i19715[0]
  i19714.name = i19715[1]
  i19714.value = i19715[2]
  return i19714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i19718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i19719 = data
  i19718.id = i19719[0]
  i19718.name = i19719[1]
  return i19718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i19720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i19721 = data
  i19720.fixedDeltaTime = i19721[0]
  i19720.maximumDeltaTime = i19721[1]
  i19720.timeScale = i19721[2]
  i19720.maximumParticleTimestep = i19721[3]
  return i19720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i19722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i19723 = data
  i19722.gravity = new pc.Vec3( i19723[0], i19723[1], i19723[2] )
  i19722.defaultSolverIterations = i19723[3]
  i19722.bounceThreshold = i19723[4]
  i19722.autoSyncTransforms = !!i19723[5]
  i19722.autoSimulation = !!i19723[6]
  var i19725 = i19723[7]
  var i19724 = []
  for(var i = 0; i < i19725.length; i += 1) {
    i19724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i19725[i + 0]) );
  }
  i19722.collisionMatrix = i19724
  return i19722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i19728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i19729 = data
  i19728.enabled = !!i19729[0]
  i19728.layerId = i19729[1]
  i19728.otherLayerId = i19729[2]
  return i19728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i19730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i19731 = data
  request.r(i19731[0], i19731[1], 0, i19730, 'material')
  i19730.gravity = new pc.Vec2( i19731[2], i19731[3] )
  i19730.positionIterations = i19731[4]
  i19730.velocityIterations = i19731[5]
  i19730.velocityThreshold = i19731[6]
  i19730.maxLinearCorrection = i19731[7]
  i19730.maxAngularCorrection = i19731[8]
  i19730.maxTranslationSpeed = i19731[9]
  i19730.maxRotationSpeed = i19731[10]
  i19730.baumgarteScale = i19731[11]
  i19730.baumgarteTOIScale = i19731[12]
  i19730.timeToSleep = i19731[13]
  i19730.linearSleepTolerance = i19731[14]
  i19730.angularSleepTolerance = i19731[15]
  i19730.defaultContactOffset = i19731[16]
  i19730.autoSimulation = !!i19731[17]
  i19730.queriesHitTriggers = !!i19731[18]
  i19730.queriesStartInColliders = !!i19731[19]
  i19730.callbacksOnDisable = !!i19731[20]
  i19730.reuseCollisionCallbacks = !!i19731[21]
  i19730.autoSyncTransforms = !!i19731[22]
  var i19733 = i19731[23]
  var i19732 = []
  for(var i = 0; i < i19733.length; i += 1) {
    i19732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i19733[i + 0]) );
  }
  i19730.collisionMatrix = i19732
  return i19730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i19736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i19737 = data
  i19736.enabled = !!i19737[0]
  i19736.layerId = i19737[1]
  i19736.otherLayerId = i19737[2]
  return i19736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i19738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i19739 = data
  var i19741 = i19739[0]
  var i19740 = []
  for(var i = 0; i < i19741.length; i += 1) {
    i19740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i19741[i + 0]) );
  }
  i19738.qualityLevels = i19740
  var i19743 = i19739[1]
  var i19742 = []
  for(var i = 0; i < i19743.length; i += 1) {
    i19742.push( i19743[i + 0] );
  }
  i19738.names = i19742
  i19738.shadows = i19739[2]
  i19738.anisotropicFiltering = i19739[3]
  i19738.antiAliasing = i19739[4]
  i19738.lodBias = i19739[5]
  i19738.shadowCascades = i19739[6]
  i19738.shadowDistance = i19739[7]
  i19738.shadowmaskMode = i19739[8]
  i19738.shadowProjection = i19739[9]
  i19738.shadowResolution = i19739[10]
  i19738.softParticles = !!i19739[11]
  i19738.softVegetation = !!i19739[12]
  i19738.activeColorSpace = i19739[13]
  i19738.desiredColorSpace = i19739[14]
  i19738.masterTextureLimit = i19739[15]
  i19738.maxQueuedFrames = i19739[16]
  i19738.particleRaycastBudget = i19739[17]
  i19738.pixelLightCount = i19739[18]
  i19738.realtimeReflectionProbes = !!i19739[19]
  i19738.shadowCascade2Split = i19739[20]
  i19738.shadowCascade4Split = new pc.Vec3( i19739[21], i19739[22], i19739[23] )
  i19738.streamingMipmapsActive = !!i19739[24]
  i19738.vSyncCount = i19739[25]
  i19738.asyncUploadBufferSize = i19739[26]
  i19738.asyncUploadTimeSlice = i19739[27]
  i19738.billboardsFaceCameraPosition = !!i19739[28]
  i19738.shadowNearPlaneOffset = i19739[29]
  i19738.streamingMipmapsMemoryBudget = i19739[30]
  i19738.maximumLODLevel = i19739[31]
  i19738.streamingMipmapsAddAllCameras = !!i19739[32]
  i19738.streamingMipmapsMaxLevelReduction = i19739[33]
  i19738.streamingMipmapsRenderersPerFrame = i19739[34]
  i19738.resolutionScalingFixedDPIFactor = i19739[35]
  i19738.streamingMipmapsMaxFileIORequests = i19739[36]
  i19738.currentQualityLevel = i19739[37]
  return i19738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i19748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i19749 = data
  i19748.weight = i19749[0]
  i19748.vertices = i19749[1]
  i19748.normals = i19749[2]
  i19748.tangents = i19749[3]
  return i19748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i19752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i19753 = data
  i19752.mode = i19753[0]
  i19752.parameter = i19753[1]
  i19752.threshold = i19753[2]
  return i19752
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i19754 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i19755 = data
  i19754.xPlacement = i19755[0]
  i19754.yPlacement = i19755[1]
  i19754.xAdvance = i19755[2]
  i19754.yAdvance = i19755[3]
  return i19754
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i19756 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i19757 = data
  i19756.m_GlyphIndex = i19757[0]
  i19756.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i19757[1], i19756.m_GlyphValueRecord)
  return i19756
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i19758 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i19759 = data
  i19758.m_XPlacement = i19759[0]
  i19758.m_YPlacement = i19759[1]
  i19758.m_XAdvance = i19759[2]
  i19758.m_YAdvance = i19759[3]
  return i19758
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

Deserializers.buildID = "fddfba45-5a97-412d-9a95-1734241c99a0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

